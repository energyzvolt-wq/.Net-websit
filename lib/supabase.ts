import { createClient } from "@supabase/supabase-js";


export const supabase =
  url && key ? createClient(url, key) : null;
