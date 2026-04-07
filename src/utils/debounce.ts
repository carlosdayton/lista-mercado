/**
 * Retorna uma versão "debounced" de uma função:
 * só executa após `delay`ms de silêncio desde a última chamada.
 */
export function debounce<T extends (...args: never[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}
