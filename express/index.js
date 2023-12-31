const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) { //
  console.log(req.query); //query are typically apprehended at the last of the url after the ? sign and multiple queries are seperated by & ,these are generally used to send the data for client to server in get requests.
  res.send("<h1>Hello World!</h1>");   //express is a library which gives the high level constructs for creating the http servers 
});

app.post("/", function (req, res) {
  res.send({
    name: req.body.name,
    surname: req.body.surname,
  });
});

app.listen(process.env.port || 3000, function () {
  console.log(`Server is running on ${process.env.port}`);
});
