const mongoose = require('mongoose');
const booksShema = new mongoose.Schema({
  titre: String,
  tome: String,
  serieRef: String,
  utilisateur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Utilisateur",
    },
  ]

});

const Books = mongoose.model('Books', booksShema);

module.exports = Books;