import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uwkoipgocqdnavcpziqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a29pcGdvY3FkbmF2Y3B6aXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDUzMjMsImV4cCI6MjA0NzY4MTMyM30.-DqLTiFxae4tTvP-hL4X8QiZznGobETGqFJEr6di8EI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
