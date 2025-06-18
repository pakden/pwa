
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfnryctvkakgkcypalek.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbnJ5Y3R2a2FrZ2tjeXBhbGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMjAyNzYsImV4cCI6MjA2NTc5NjI3Nn0.8oJ8AHCXoP4G6Sy21B-_2udGxacB_otKGD8G26kzVAk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
