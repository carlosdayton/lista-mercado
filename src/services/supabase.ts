import { createClient } from '@supabase/supabase-js';

// As variáveis globais foram injetadas pelo esbuild
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
