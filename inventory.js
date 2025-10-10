const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(bodyParser.json());

const supabaseUrl = 'https://nabcwfkoylclncjoikxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYmN3ZmtveWxjbG5jam9pa3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDE1NTUsImV4cCI6MjA3NTMxNzU1NX0.O4CEgrysOfP5AoKTkzSO28cFa3Npl9gZrUnTNTZ9Ewk';
const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = 3000;

app.get('/Project', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Project').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Project', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Project').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Project added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/Users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Users').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Users').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'User added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/Stock', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Stock').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Stock', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Stock').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Stock added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/Expenses', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Expenses').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Expenses', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Expenses').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Expenses added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/Bills', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Bills').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Bills', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Bills').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Bills added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/Client_payments', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Client_payments').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/Client_payments', async (req, res) => {
    try {
        const { data, error } = await supabase.from('Client_payments').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Client Payments added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
