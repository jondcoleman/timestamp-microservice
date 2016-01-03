var express = require('express');
var app = express();
var moment = require('moment');

app.get('/', function(req, res){
    res.send('hello world');
})

app.get('/:time', function(req, res){
  var time = moment(req.params.time);
  if (time.isValid()){
    var response = {
      unix: time.unix(),
      natural: time.format('MMMM DD, YYYY')
    }
  } else {
    var response = {
      unix: null,
      natural: null
    }
  }

  res.json(response)
})

var server = app.listen(3000, function(){
    console.log('App listening on port 3000');
})
