var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, function() {
    console.log('connected to server on PORT ', PORT);
});
