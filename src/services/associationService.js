import { supabase } from '../config/supabaseClient.js';

export const associationService = {
  async getBillsWithProjects() {
    const { data, error } = await supabase
      .from('Bills')
      .select(`
        bill_id,
        date_of_print,
        price,
        item,
        Project (
          project_id,
          project_name,
          project_location,
          start_date,
          plot_size,
          project_type,
          duration,
          budget
        )
      `);

    if (error) throw error;
    return data;
  },
};