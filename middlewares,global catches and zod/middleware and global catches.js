//middlewares are function used to check some conditions before sending the response.
//we can use middleware for authentication, logging etc..
const express = require("express");
const app = express();
const port = 3000;

function mw1(req, res, next) {
  console.log("Middleware 1");
  next();
}

function mw2(req, res, next) {
  console.log("Middleware 2");
  next();
}

app.get("/", mw1, mw2, function (req, res) {
    res.send("Hello World!");
});



//we should check our body or input validation so that our server does not crashes.
//global catches help us to give user a better error message
//error-handling-middlewares- This is a special type of middleware function in express that has four arguments instead of three ('err',req,res,next) . express recognizes it as an error-handling middleware because of these four arguments.(always add it at the last)

app.use(function(err,req,res,next){
    res.json({
        msg:"something is up with our server"
    })
})