import express from 'express';
import billRoutes from './routes/billRoutes.js';
import clientPaymentRoutes from './routes/clientPaymentRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/bills', billRoutes);
app.use('/client_payments', clientPaymentRoutes);
app.use('/expenses', expenseRoutes);
app.use('/projects', projectRoutes);
app.use('/stock', stockRoutes);
app.use('/users', userRoutes);

export default app;
