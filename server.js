var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());

var jokes = {
  laughs: [

    {joke: 'Knock, Knock ... Who\'s there? Shut yer trap, that\'s who'},
    {joke: 'Chuck Norris tells Simon what to do'},
    {joke: 'Two blondes walk into a bar, you\'d think that at least one of them would\'ve seen it!'},

  ]

};


app.get('/jokes', function(req, res) {
  res.status(200);
  res.send(jokes);
})

app.post('/jokes', function(req, res) {
  var body = req.body;
  jokes.laughs.push(body);

  res.end();
})


var port = 3030;
app.listen(port);
console.log('Listening on port: ', port);
