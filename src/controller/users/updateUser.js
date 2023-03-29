const Utilisateur = require("../../model/Users");
const mongoose = require("mongoose");

const updateUser = async (req, res) => {
  try {
    const user = await Utilisateur.findByIdAndUpdate(
      req.params.id,
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        phone: req.body.phone
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { updateUser };
