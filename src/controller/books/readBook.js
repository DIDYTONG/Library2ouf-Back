const Books = require("../../model/Books");
const mongoose = require("mongoose");

const readBook = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        res.status(200).json(book);
        console.log("done")
    } catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
};

module.exports = { readBook };