const Utilisateur = require("../../model/Users");
const Book = require("../../model/Books");

const attribuerLivreUtilisateur = async (req, res) => {
    try {
        const livreId = req.params.id_livre;
        const utilisateurId = req.params.id_utilisateur;

        // Vérifier si l'utilisateur existe
            console.log(utilisateurId)
            console.log(livreId)
        const utilisateur = await Utilisateur.findById(utilisateurId);
        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        // Vérifier si le livre existe
        const livre = await Book.findById(livreId);
        if (!livre) {
            return res.status(404).json({ message: "Book introuvable" });
        }

        // Attribuer le livre à l'utilisateur
        utilisateur.livres.push(livre);
        livre.utilisateur = utilisateur;
        await utilisateur.save();
        await livre.save();

        res
            .status(200)
            .json({ message: "Book attribué avec succès à l'utilisateur" });
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

module.exports = { attribuerLivreUtilisateur };
