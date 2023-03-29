const mongoose = require('mongoose');
const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  phone: String,

});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;
