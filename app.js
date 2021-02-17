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




 



app.post("/", function (req, res){
    // console.log(process.env)
    // const query = req.body;
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData  = JSON.stringify(data);

    const url = "https://us19.api.mailchimp.com/3.0/lists/1dbb72578e"

    const options = {
        method: "POST",
        auth: "Michael:" + process.env.API_KEY
    }

   const request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })


    request.write(jsonData)
    request.end();

})


app.post("/failure", function(req, res){
    res.redirect("/")
})

app.post("/success", function(req, res){
    res.redirect('http://mycodedojo.com')
})


app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})



// LIST ID 1dbb72578e