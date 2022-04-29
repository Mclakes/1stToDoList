//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {

    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("yay, it is the weekend!");
    }

        else  {
            res.send("it is a working day")
        }
    
    
});

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});