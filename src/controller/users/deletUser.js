const Utilisateur = require("../../model/Users");
const mongoose = require("mongoose");

const deletUser = async (req, res) => {
  try {
    const user = await Utilisateur.findByIdAndDelete(req.params.id)
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { deletUser };
