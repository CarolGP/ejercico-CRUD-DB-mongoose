const express = require('express');
const dotenv = require('dotenv');
const connectDB = require ('./config/config');
const taskRoutes = require('./routes/routesTask');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/tasks', taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`El servidor está escuhando en el puerto ${process.env.PORT}`);
});