const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res){
    // res.sendFile(__dirname + "/signup.html");

    
    res.send("Server is up and running.")
})





app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})