const Book = require("../../model/Books");
const Library = require('../../model/Library')

const addEndLibrary = async (req, res) => {
    try {
        const bookId = req.params.id_livre;
        const libraryId = req.params.id_library;

        const library = await Library.findById(libraryId);
        const book = await Book.findById(bookId);

        // Attribuer le livre à l'utilisateur
        book.status = "fini";
        library.bookStatus.end.push(book);


        book.library = library;
        await book.save();
        await library.save();

        res
            .status(200)
            .json({ message: "Book attribué avec succès à l'utilisateur (end)" });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                message:
                    "Erreur serveur lors de l'attribution du livre à l'utilisateur",
            });
    }
};

module.exports = { addEndLibrary };
