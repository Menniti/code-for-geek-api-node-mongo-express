// server.js

// require modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

// creating route
router.get('/', function(req, res){
	res.json({"error": false, "message":"hello world"});
});

// use router with prefix "/"
app.use('/', router);

// listen port 3000
app.listen(3000);
console.log("The server is running in port 3000");