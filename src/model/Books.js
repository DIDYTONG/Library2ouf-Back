const mongoose = require('mongoose');
const Utilisateurs = require('../model/Users');

const booksShema = new mongoose.Schema({
  titre: String,
  tome: String,
  serieRef: String,
  status: String,
  utilisateur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Utilisateurs",
    }
  ]

});

const Books = mongoose.model('Books', booksShema);

module.exports = Books;
