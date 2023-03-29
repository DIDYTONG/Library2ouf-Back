const Utilisateur = require("../../model/Users");
const mongoose = require("mongoose");

const ajouterUtilisateur = async (req, res) => {
  try {
    let utilisateur = new Utilisateur({
      nom: req.body.nom,
      prenom: req.body.prenom,
      phone: req.body.phone
    });
    let result = await utilisateur.save();
    console.log("User add")
    res.status(200).json(result);
    
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { ajouterUtilisateur };