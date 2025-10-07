const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(bodyParser.json());

const supabaseUrl = 'https://nabcwfkoylclncjoikxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYmN3ZmtveWxjbG5jam9pa3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDE1NTUsImV4cCI6MjA3NTMxNzU1NX0.O4CEgrysOfP5AoKTkzSO28cFa3Npl9gZrUnTNTZ9Ewk';
const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = 3000;


app.get('/project', async (req, res) => {
    try {
        const { data, error } = await supabase.from('project').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/project', async (req, res) => {
    try {
        const { data, error } = await supabase.from('project').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Project added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'User added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/stock', async (req, res) => {
    try {
        const { data, error } = await supabase.from('STOCK').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/stock', async (req, res) => {
    try {
        const { data, error } = await supabase.from('STOCK').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Stock added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/expense', async (req, res) => {
    try {
        const { data, error } = await supabase.from('expense').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/expense', async (req, res) => {
    try {
        const { data, error } = await supabase.from('expense').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Expense added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/bill', async (req, res) => {
    try {
        const { data, error } = await supabase.from('bill').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/bill', async (req, res) => {
    try {
        const { data, error } = await supabase.from('bill').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Bill added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/clientpayment', async (req, res) => {
    try {
        const { data, error } = await supabase.from('clientpayment').select('*');
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/clientpayment', async (req, res) => {
    try {
        const { data, error } = await supabase.from('clientpayment').insert([req.body]);
        if (error) throw error;
        res.json({ message: 'Client Payment added successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
