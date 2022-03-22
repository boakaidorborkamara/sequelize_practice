const { application } = require("express");
const express = require("express");
const app = express();


// import database connection file
const db = require('./config/database');
// role table 
const role = require('./model/role');




// define port 
let port = 3306;



// ROUTE 
app.get("/",(req,res)=>{
    res.send("working");
})

// notification about port 
app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})