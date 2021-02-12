const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public')); // Remember to not include public in the url links.


app.get("/", function (req, res){
    res.sendFile(__dirname + "/signup.html");

    
    // res.send("Server is up and running.")
})

app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
  });
 



app.post("/", function (req, res){
    console.log(process.env)
    const query = req.body.cityName;
    const url = process.env.API_URL + query + "&appid=" + process.env.API_KEY;
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            // const mailData = JSON.parse(data);
            // const temp = mailData.main.temp;
            // const icon = mailData.weather[0].icon;
            // const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            

            res.write("");
            res.send();
        })
    
});
})



app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})