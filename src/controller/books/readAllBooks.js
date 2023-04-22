const Books = require("../../model/Books");

const readAllBooks = async (req, res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { readAllBooks };