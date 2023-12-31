const express = require('express');

const app = express();

let requestCount = 0;

app.use(function(req,res,next){
    requestCount++;
    console.log(requestCount);
    next()
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000)