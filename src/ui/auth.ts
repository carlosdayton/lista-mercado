import { login, register, logout, onAuthStateChange } from '../services/authService';
import { mostrarToast } from './toast';
import { inicializarLista } from '../services/listaService';
import { inicializarModelos } from '../services/modelosService';
import { renderizarLista, renderizarResumo } from './render';
import { obterPorCategoria } from '../services/listaService';

let isLoginMode = true;

const overlay = document.getElementById('auth-overlay')!;
const titulo = document.getElementById('auth-titulo')!;
const sub = document.getElementById('auth-sub')!;
const toggleTexto = document.getElementById('auth-toggle-texto')!;
const toggleBtn = document.getElementById('btn-auth-toggle')!;
const form = document.getElementById('form-auth') as HTMLFormElement;
const emailInput = document.getElementById('auth-email') as HTMLInputElement;
const senhaInput = document.getElementById('auth-senha') as HTMLInputElement;
const submitBtn = document.getElementById('btn-auth-submit') as HTMLButtonElement;
const btnLogout = document.getElementById('btn-logout')!;

export function configurarAuthFallback() {
  toggleBtn.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    if (isLoginMode) {
      titulo.textContent = 'Bem-vindo';
      sub.textContent = 'Entre na sua conta para acessar suas listas sincronizadas.';
      submitBtn.textContent = 'Entrar';
      toggleTexto.textContent = 'Ainda não tem conta?';
      toggleBtn.textContent = 'Criar conta';
    } else {
      titulo.textContent = 'Criar conta';
      sub.textContent = 'Crie uma conta gratuita para não perder suas listas.';
      submitBtn.textContent = 'Cadastrar';
      toggleTexto.textContent = 'Já possui uma conta?';
      toggleBtn.textContent = 'Fazer login';
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();
    if (!email || !senha) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Carregando...';

    try {
      if (isLoginMode) {
        await login(email, senha);
        mostrarToast('Bem-vindo de volta!', 'sucesso');
      } else {
        await register(email, senha);
        mostrarToast('Conta criada com sucesso!', 'sucesso');
      }
    } catch (err: any) {
      mostrarToast(err.message || 'Ocorreu um erro', 'erro');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isLoginMode ? 'Entrar' : 'Cadastrar';
    }
  });

  btnLogout.addEventListener('click', async () => {
    await logout();
    mostrarToast('Você saiu da conta', 'info');
  });

  // Watcher de Auth (gerencia a tela automaticamente)
  onAuthStateChange(async (user) => {
    if (user) {
      overlay.classList.remove('ativo');
      // Quando logar, força recarregar do Supabase e renderiza
      await inicializarLista();
      await inicializarModelos();
      
      renderizarLista(obterPorCategoria());
      renderizarResumo();
      
      // Cleanup inputs
      emailInput.value = '';
      senhaInput.value = '';
    } else {
      overlay.classList.add('ativo');
    }
  });
}
