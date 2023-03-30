const Utilisateur = require('../../model/Users');
const Livre = require('../../model/Books');

const addRead = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findById(userId);
        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        const livre = await Livre.findById(req.params.livreId);
        if (!livre) {
            return res.status(404).json({ message: 'Livre introuvable' });
        }

        if (utilisateur.livres.includes(livre._id)) {
            livre.lu = true;
            await livre.save();
            return res.status(200).json({ message: 'Livre mis à jour avec succès' });
        } else {
            return res.status(404).json({ message: 'Livre non associé à l\'utilisateur' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du livre' });
    }
};

module.exports = { addRead };
