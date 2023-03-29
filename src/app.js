const express = require('express');

require('dotenv').config()
const connectDB = require('../src/utilities/db/connect');
const utilisateurRoutes = require('../src/route/route');
const app = express();

const errorHandler = require('../src/utilities/middleware/errorHandler');
app.use(errorHandler);
app.use(express.json()); 
connectDB()
app.use('/', utilisateurRoutes);
  
app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
  });