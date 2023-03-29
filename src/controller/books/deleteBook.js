const Books = require("../../model/Books");
const mongoose = require("mongoose");

const deletBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id)
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
};

module.exports = { deletBook };
