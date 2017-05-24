// mongo.js
// require moongose
var mongoose = require("mongoose");

// open connection do mongoDB
mongoose.connection('mongodb://localhost/demoDb');

// create instance schema
var mongoSchema = new mongoose.Schema({
	"userEmail": String,
	"userPassword": String,
});
// create model if not exists
module.exports = mongoose.model('userLogin', mongoSchema);