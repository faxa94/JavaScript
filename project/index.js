var e = require('express');
var app = e();

// respond with "hello world" when a GET request is made to the homepage
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});