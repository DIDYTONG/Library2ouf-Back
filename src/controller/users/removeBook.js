const Utilisateur = require("../../model/Users");
const Book = require("../../model/Books");

const removeBook = async (req, res) => {
    try {
        const user = await Utilisateur.findById(req.params.userId);

        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json({message: "L'utilisateur n'a pas été trouvé."});
        }

        // Vérifier si le livre existe dans la liste de l'utilisateur
        if (!user.livres.includes(req.params.livreId)) {
            return res.status(404).json({message: "Le livre n'a pas été trouvé dans la liste de l'utilisateur."});
        }

        // Supprimer le livre de la liste de l'utilisateur
        user.livres.pull(req.params.livreId);
        await user.save();

        res.json({message: "Le livre a été supprimé de la liste de l'utilisateur."});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Une erreur est survenue lors de la suppression du livre de la liste de l'utilisateur."});
    }
};

module.exports = { removeBook };
