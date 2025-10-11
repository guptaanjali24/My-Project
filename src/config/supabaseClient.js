// src/config/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

//  Supabase connection setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Export so services can use it
module.exports = supabase;
