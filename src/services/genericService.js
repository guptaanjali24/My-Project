import { supabase } from '../config/supabaseClient.js';

export const genericService = {
  async getAll(table) {
    const { data, error } = await supabase.from(table).select('*');
    if (error) throw error;
    return data;
  },

  async getById(table, id, idField = 'id') {
    const { data, error } = await supabase.from(table).select('*').eq(idField, id).single();
    if (error) throw error;
    return data;
  },

  async create(table, payload) {
    const { data, error } = await supabase.from(table).insert(payload).select();
    if (error) throw error;
    return data;
  },

  async update(table, id, payload, idField = 'id') {
    const { data, error } = await supabase.from(table).update(payload).eq(idField, id).select();
    if (error) throw error;
    return data;
  },

  async remove(table, id, idField = 'id') {
    const { error } = await supabase.from(table).delete().eq(idField, id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  },
};


