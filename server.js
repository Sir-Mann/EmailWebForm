//jshint esversion:6
// Ensure everything is required
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static("public"));

app.get("/", function(req, res) {
    //send html file. Do this so that other code can run.
    res.sendFile(__dirname + "/contactform.html");
});

app.post("/", function(req, res) {
     var data = JSON.parse(req.body)
     console.log(data);
  });
  

app.listen(PORT, function(req, res) {
    console.log('Listening on port ${PORT}');
});
