require('dotenv').config({ path: './.env' }) 
const express = require("express");
const mongoose = require('mongoose');
const app = express();



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
  console.log('Connected!');
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
