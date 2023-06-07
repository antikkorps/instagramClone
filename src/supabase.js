import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tzqskzhqpjdcfypemqtq.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
