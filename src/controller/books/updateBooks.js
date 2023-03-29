const Books = require("../../model/Books");
const mongoose = require("mongoose");

const updateBooks = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(
        req.params.id,
        {
            titre: req.body.titre,
            tome: req.body.tome,
            serieRef: req.body.serieRef,
        },
        { new: true }
    );
    
    console.log("modif !");

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = { updateBooks };


