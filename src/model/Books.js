const mongoose = require('mongoose');
const booksShema = new mongoose.Schema({
  titre: String,
  tome: String,
  serieRef: String,

});

const Books = mongoose.model('Books', booksShema);

module.exports = Books;