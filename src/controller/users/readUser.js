const Utilisateur = require("../../model/Users");
const mongoose = require("mongoose");


const readUser = async (req, res) => {
  try {
    const user = await Utilisateur.findById(req.params.id);
    res.status(200).json(user);
    console.log("done")
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { readUser };