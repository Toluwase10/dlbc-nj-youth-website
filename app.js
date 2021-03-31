require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Express server
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


/**
 * -------------- ROUTES ----------------
 */

 //get home page
app.get("/", function (req, res){
    res.render("home");
  });









//Connect to server
app.listen(port, function(){
  console.log("Server is listening on port " + port);
});













// ********** nav toggle ************
// select button and links
// const navBtn = document.getElementById("nav-toggle");
// const links = document.getElementById("nav-links");
// add event listener
// navBtn.addEventListener("click", () => {
//   links.classList.toggle("show-links");
// });


