const mongoose = require('mongoose');

const booksShema = new mongoose.Schema({
  titre: String,
  tome: String,
  serieRef: String,
  status: String,
  description: String,
  imgUrl: String,
  utilisateur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Utilisateurs",
    }
  ]

});

const Books = mongoose.model('Books', booksShema);

module.exports = Books;
