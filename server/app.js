var express = require('express');
var app = express();
var path = require('path');

var zetaData = require('./routes/getData');
//var bodyParser = require('body-parser');

var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({expanded: true}));


app.use('/data', zetaData);

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("MEOW! " + app.get("port"));
});