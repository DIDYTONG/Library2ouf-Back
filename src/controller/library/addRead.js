const Book = require("../../model/Books");
const Library = require('../../model/Library');
const User = require('../../model/Users');

const addStatus = async (req, res) => {
    try {
        const libraryid = req.params.id_library;
        const livreid = req.params.id_livre;
        const status = req.params.status;

        const library = await Library.findById(libraryid).populate('utilisateur').exec();

        if (!library) {
            return res.status(404).json({ message: "Bibliothèque non trouvée" });
        }

        const userId = library.utilisateur._id;
        console.log(userId)
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const book = await Book.findById(livreid);

        if (!book) {
            return res.status(404).json({ message: "Livre non trouvé" });
        }

        if (!user.livres.includes(livreid)) {
            return res.status(404).json({ message: "L'utilisateur ne possède pas ce livre" });
        }

        const libraryBook = library.book.find((libraryBook) => libraryBook._id.equals(livreid));

        if (!libraryBook) {
            let hasNewBook = false; // variable pour vérifier si un nouveau livre est ajouté

            // Vérifier si chaque livre de l'utilisateur est dans la bibliothèque
            for (let livreUser of user.livres) {
                let isBookExist = false;
                for (let livreLibrary of library.book) {
                    if (livreUser.equals(livreLibrary)) {
                        isBookExist = true;
                        break;
                    }
                }

                // Si le livre n'existe pas dans la bibliothèque, ajouter le livre et mettre la variable hasNewBook à true
                if (!isBookExist) {
                    const book = await Book.findById(livreUser);
                    library.book.push(book);
                    hasNewBook = true;
                }
            }

            // Enregistrer la bibliothèque si un nouveau livre est ajouté
            if (hasNewBook) {
                await library.save();
                res.status(200).json({ message: "La bibliothèque a été mise à jour avec les nouveaux livres de l'utilisateur" });
            }
        }

        libraryBook.status = status;
        await library.save();

        res.status(200).json({ message: `Le statut ${libraryBook.status} du livre ${book.titre} tome ${book.tome} a été mis à jour dans la bibliothèque de l'utilisateur` });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la mise à jour du statut du livre" });
    }
};

module.exports = { addStatus };
