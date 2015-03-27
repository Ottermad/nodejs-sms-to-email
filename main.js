var bodyParser = require('body-parser')
var express = require('express');
var app     = express();
var sendgrid  = require('sendgrid')('','');

app.use(bodyParser());

app.post('/', function(req, res) {
 	console.log(req.body);
	var message_array = req.body.Body.split(",");
	console.log(message_array);
	
	sendgrid.send({
	    to:       message_array[0],
	    from:     message_array[1],
	    subject:  message_array[2],
	    text:     message_array[3]
	  }, function(err, json) {
	    if (err) { return console.error(err); }
	    console.log(json);
	});
  });
    
app.listen(process.env.PORT || 8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

