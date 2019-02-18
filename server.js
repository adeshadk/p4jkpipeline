var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('This is assesment for leaning project 4')
}) 

//App listening server on port 8081
app.listen(8081, function () {
  console.log('Listening at port 8081')
})
screen