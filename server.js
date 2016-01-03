var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
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

var server = app.listen(process.env.PORT || 3000, function(){
    console.log('App listening on port 3000');
})
