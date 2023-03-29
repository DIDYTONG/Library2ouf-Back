const mongoose = require('mongoose');
const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  phone: String,
  livres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Livre",
    },
  ]
});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;
