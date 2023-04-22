const Library = require("../../model/Library");
const Books = require("../../model/Books");

const readLibrary = async (req, res) => {
    try {
        const library = await Library.findById(req.params.id);
        const status = await Library.findById(req.params.status);
        tmp = [];
        for (bookId of library.book){
            const book = await Books.findById(bookId.toString());
            tmp.push(book)
        }
        console.log(tmp)
        res.status(200).json(tmp);

    } catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
};

module.exports = { readLibrary };