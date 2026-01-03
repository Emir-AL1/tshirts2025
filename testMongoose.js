const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');


var Tshirts = require('./models/tshirts.js').Tshirts



var tshirts = new Tshirts({
   title: "Puma",
   nick: "puma",

})




tshirts.save();
