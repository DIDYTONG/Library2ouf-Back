const Book = require("../../model/Books");
const Library = require('../../model/Library');
const User = require('../../model/Users');

const addBookToLibrary = async (req, res) => {

    const libraryId = req.params.id_library;
    const userId = req.params.id_user;

    try {
        let hasNewBook = false;

        // Fetch the user object from the database
        const user = await User.findById(userId);

        // Fetch the library object from the database
        const library = await Library.findById(libraryId);

        // Filter out books that are no longer in the user's collection
        library.book = library.book.filter((book) => user.livres.includes(book._id));

        // Loop through each book in the user's book collection
        for (let livreUser of user.livres) {
            let isBookExist = false;

            // Loop through each book in the library's book collection
            for (let livreLibrary of library.book) {
                if (livreUser.equals(livreLibrary._id)) {
                    // The book already exists in the library, so we don't need to add it again
                    isBookExist = true;
                    break;
                }
            }

            // If the book doesn't exist in the library, add it
            if (!isBookExist) {
                const book = await Book.findById(livreUser);
                library.book.push(book);
                hasNewBook = true;
            }
        }

        if (hasNewBook) {
            // Save the updated library object to the database
            await library.save();
        }

        // Return a success message
        res.status(200).json({ message: "Livres ajoutés avec succès." });
        console.log("yes")
    } catch(error) {
        console.error(error);
        // Return an error message
        res.status(500).json({ error: "Erreur lors de l'ajout du livre à la bibliothèque" });
    }
};

module.exports = { addBookToLibrary };
