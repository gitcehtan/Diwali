const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
let path = require("path");
let Wisher = require("./models/Diwali.model.js");
let quotes = require('./quotes.json');

// Middleware
app.use(express.static(__dirname+"/public/"));
app.use(express.json());
// Middleware to parse incoming form data
// app.use(express.urlencoded({ extended: true }));

let PORT = process.env.PORT;

// DB Connection
// function ConnectDB() {
//     try {
//         mongoose.connect(process.env.MongoDB_URI);
//         console.log(`DB Connected`);
//     } catch (error) {
//         console.log(error);
//     }
// }
// We are currently not using database in the above version
// ConnectDB();


// Routes Request

app.get(`/main`, (req, res) => {
    console.log(req.query);
    
    console.log("Server hit");
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
})

app.get("/quotes",(req,res) => {
    res.send(quotes);
})

app.post("/", (req,res)=>{
    let name = req.body.name;

    console.log( name);

    
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
