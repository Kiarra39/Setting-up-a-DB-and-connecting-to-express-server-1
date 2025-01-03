
require('dotenv').config();
const express = require('express');
const { resolve } = require('path');

const app = express();
const mongoose=require('mongoose');
const port = 3010;

const connectstring=process.env.MONGO_URI;
mongoose.connect(connectstring)
    .then(() => console.log('Connected to database'))
    .catch((error) => {
        console.error(`Error connecting to database: ${error.message}`);
        
    });

    app.get('/', (req, res) => {
      res.sendFile(resolve(__dirname, 'pages/index.html'));
    });


    console.log(process.env.MONGO_URI);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
