const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');

var schema = mongoose.Schema({ name: String })
const shirt = mongoose.model('Tshirt', { name: String });


const puma = new shirt ({ name: 'puma' });
puma.save().then(() => console.log('Футболка готова)'));

