const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(bodyParser.json());

const supabaseUrl = 'https://nabcwfkoylclncjoikxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYmN3ZmtveWxjbG5jam9pa3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDE1NTUsImV4cCI6MjA3NTMxNzU1NX0.O4CEgrysOfP5AoKTkzSO28cFa3Npl9gZrUnTNTZ9Ewk'; 
const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = 3000;

const tables = ['project', 'users', 'STOCK', 'expense', 'bill', 'clientpayment']; 

tables.forEach((table) => {
    app.get(`/${table.toLowerCase()}`, async (req, res) => {
        try {
            const { data, error } = await supabase.from(table).select('*');
            if (error) throw error;
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.post(`/${table.toLowerCase()}`, async (req, res) => {
        try {
            const body = req.body;
            const { data, error } = await supabase.from(table).insert([body]);
            if (error) throw error;
            res.json({ message: `${table} added successfully`, data });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.patch(`/${table.toLowerCase()}/:id`, async (req, res) => {
        try {
            const id = req.params.id;
            const updates = req.body;
            const primaryKey = Object.keys(updates)[0] || 'id';
            const { data, error } = await supabase.from(table).update(updates).eq(primaryKey, id);
            if (error) throw error;
            res.json({ message: `${table} updated successfully`, data });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.delete(`/${table.toLowerCase()}/:id`, async (req, res) => {
        try {
            const id = req.params.id;
            const primaryKey = 'projectid'; 
            const { data, error } = await supabase.from(table).delete().eq(primaryKey, id);
            if (error) throw error;
            res.json({ message: `${table} deleted successfully`, data });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
