## Newsletter Signup with MAILCHIMP
---


1) Configure the Boilerplate information with app.js, signup.html, success.html, failure, html
2) INIT NPM default options
3) Install required NPM packages, body-parser, express 
4) Require them and add 
```
app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})

```

5) # API-Newsletter-Signup-MailChimp

1. Lets create a signup page, but with bootstrap.





## ENVIRONMENT VARIABLES FILE or .env file
---

1. In order to prevent uploading important api keys and other sensitive data we need to create a .env file and .gitignore

2. You add the .gitignore to the root directory and add these two entries: .env and node_modules
```
node_modules/
.env
```

3. Once add to the .gitignore we can create the .env file. Use the example below.

``API_KEY = 345423342342352362352523``  // No Quotations needed for strings.


4. Make sure to install npm i dotenv (Confirm the dependency in the package.json)

5. Require it and add the config method. require('dotenv').config();  // now process.env should have access to your .env file and entries, try to log it.


## Styling the Template
----

1. First we need to configure our public folder so we can share our public files, css and images.

```
app.use(express.static(__dirname + '/public')); // Remember to not include public in the url links.

```

2. Make sure your links in the html files don't list 'public'.

3. Configure the top, middle and bottom classes for the text fields so the top and bottom fields have rounded edges but not the middle edges.



## Configuring the Post Route
---

1. Now that we have our signup page setup, we need to configure it to handle the data properly once the user clicks submit.

2. First we need to require body-parser and configure it using the urlencoded extended: true

3. Lets add names to our signup elements so body parser can parse it correctly. examples, name = "fName", etc

4. Make sure your Form element has the action = "/"  and method="POST" to trigger the Post route correctly.


## Posting Data to MailChimp Servers
---

[MailChimp Lists/Audience API Reference](https://mailchimp.com/developer/marketing/api/lists/)

1. First Obtain your MailChimp API Key. (Already configured during my gitignore module)

2. View the [MailChimp Lists/Audience API Reference](https://mailchimp.com/developer/marketing/api/lists/)

3. Find your LIST ID from settings page of mailchimp | 1dbb72578e

4. Create a data const with json object named members. Following members section guide.

5. Now we need to stringify our json object after were done.

6. Create a const url with your list ID

- const url = "https://usx.api.mailchimp.com/3.0/lists/1dbb72578e"

7. Add US19 to any server address prefix so the api works correctly. 

8. Add options object, with method = "POST" and auth: "AnyString: API_KEY"

9. Add Response.on callback function

10. Then we need to take our jsonData and call request.write


## Create a Success or Fail Page after Submission
---


1. We need to Determine what response code is returned from our request. If the response code is 200, it was a success. anything else and it is a failure. 

2. So we can add an if statement inside our request/response callback. 

```
if (response.statusCode === 200){
    do this
} else {
    do this
}

```

3. Lets Bootstrap our Success and Failure pages and req.sendfile their routes.

4. Lets add app.post to the "/failure" route. So the user can leave the failure page back to the "/" home route. aka signup page


## HEROKU SERVER CONFIGURATION
---

1. Make Sure Heroku CLI is configured correctly. IE, node, git, npm are all installed and up to date.

2. On the app.js we need to re-configure the ports. add process.env.PORT

3. Create Procfile This tells heroku how to run the app.  no file extensions and needs to be capitalized. This tells the server how to run the application.  

web: node app.js    in our instance.

4. Once we have everything updated on github we can do a heroku create from the console. If successfull you will generate a url and if you visit you will be prompted by a success but not by your site. 

5. PUSH lastest revision to Heroku   git push heroku master
