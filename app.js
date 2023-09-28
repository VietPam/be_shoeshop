const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/routes/index');
const cors = require('cors')
require('dotenv').config()

const db = require('./src/config/index')

const app = express();

//Su dung port 5000
const PORT = 5000;
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
app.use(express.urlencoded({
    extended: true
}))

  
  
  
  
  
  
app.use(express.json())



route(app)

db.connect()

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
