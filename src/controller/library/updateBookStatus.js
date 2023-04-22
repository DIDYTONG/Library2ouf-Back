const Book = require("../../model/Books");
const Library = require('../../model/Library');
const User = require('../../model/Users');


const updateBookStatus = async (req, res) => {
    try {
        const libraryId = req.params.libraryId;
        const bookId = req.params.bookId;
        const newStatus = req.params.status;

        // Recherche de la bibliothèque correspondante à l'ID fourni
        const library = await Library.findById(libraryId);

        // Recherche du livre correspondant à l'ID fourni dans la bibliothèque
        const book = library.book.find(book => book._id.toString() === bookId);

        // Vérification que le livre a été trouvé
        if (!book) {
            return res.status(404).json({
                message: 'Le livre correspondant à l\'ID fourni n\'a pas été trouvé dans la bibliothèque.'
            });
        }

        // Mise à jour du statut du livre
        book.status = newStatus;

        // Enregistrement des changements dans la base de données
        await library.save();
        await Book.findByIdAndUpdate(bookId, { status: newStatus });

        // Récupération du livre mis à jour depuis la base de données
        const updatedBook = await Book.findById(bookId);

        res.status(200).json({
            message: 'Le statut du livre a été mis à jour avec succès.',
            book: updatedBook
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};


module.exports = { updateBookStatus };
