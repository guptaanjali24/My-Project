const supabase = require('../config/supabaseClient');

function createService(tableName) {
  return {
    //  Get all rows
    getAll: async () => {
      const { data, error } = await supabase.from(tableName).select('*');
      if (error) throw new Error(error.message);
      return data;
    },

    //  Get by ID
    getById: async (id) => {
      const { data, error } = await supabase.from(tableName).select('*').eq('id', id).single();
      if (error) throw new Error(error.message);
      return data;
    },

    //  Create new
    create: async (body) => {
      const { data, error } = await supabase.from(tableName).insert([body]).select();
      if (error) throw new Error(error.message);
      return data[0];
    },

    //  Update
    update: async (id, body) => {
      const { data, error } = await supabase.from(tableName).update(body).eq('user_id', id).select();
      if (error) throw new Error(error.message);
       console.log(`Updated ${tableName} row with ID ${id}:`, data);
      return data[0];
    },

    // Delete
    remove: async (id) => {
      const { error } = await supabase.from(tableName).delete().eq('id', id);
      if (error) throw new Error(error.message);
      return true;
    },
  };
}

module.exports = { createService };
