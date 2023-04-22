const Books = require("../../model/Books");
const mongoose = require("mongoose");

const addBooks = async (req, res) => {
  try {
    let book = new Books({
        titre: req.body.titre,
        tome: req.body.tome,
        serieRef: req.body.serieRef,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        status: req.body.status
    });
    let result = await book.save();
    console.log("Books add")
    res.status(200).json(result);
    
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { addBooks };