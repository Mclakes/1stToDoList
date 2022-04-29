//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

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
            // res.write("<h1>it is a working day</h1>");
            // res.write("<p>Hence i can't come to party with you</p>");
            // res.send();

            res.sendFile(__dirname + "/index.html");
        }
    
    
});

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});