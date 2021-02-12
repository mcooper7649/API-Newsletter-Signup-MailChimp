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