var express = require('express');
var app = express();

console.log('environment', process.env);
console.log('my PWD', process.env.PWD);

app.use(express.static('public'));

var port = process.env.PORT || 5500;
app.listen(port, function() {
  console.log('listening on port', port);
});
