require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Import routes
const billRoutes = require('./routes/billRoutes');
const clientPaymentRoutes = require('./routes/clientPaymentRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const projectRoutes = require('./routes/projectRoutes');
const stockRoutes = require('./routes/stockRoutes');
const userRoutes = require('./routes/userRoutes');

// Register routes
app.use('/api/bills', billRoutes);
app.use('/api/client-payments', clientPaymentRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
