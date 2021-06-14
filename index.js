const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// oder_summary.json
const data = require("./order_summary.json");
const PORT =  process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// routes

// CUSTOMER'S PERSONAL DETAILS ROUTES
app.get("/customer", (req, res)=>{
    return res.json({message : "sucessful", data: data.user});
})


// ORDER ROUTES
app.get("/order", (req, res)=>{
    return res.json({message : "successful", data: data.items});
})

app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT);
})
