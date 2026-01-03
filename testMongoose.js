const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');

const shirtSchema = new mongoose.Schema({ 
  name: String 
});

shirtSchema.methods.show = function () {
  console.log(`${this.name} — в магазине прямо сейчас!`);
};

const Shirt = mongoose.model('Shirts', shirtSchema);

const puma = new Shirt({ name: 'puma' });

puma.save().then(() => {
  console.log('Кроссовок успешно сохранён!');
  puma.show();  // ← вот здесь сработает наш метод
});