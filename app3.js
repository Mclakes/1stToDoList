//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

app.use('view engine', 'ejs');

const app = express();

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay()

    if ( currentDay === 5 || currentDay === 0) {
        res.write("<h1>yay, it is the weekend!</h1>");
        res.write("<p>it is time to party</p>");
        res.send();
    }

        else  {
           
            res.sendFile(__dirname + "/index.html");
        }
    
    
});

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});