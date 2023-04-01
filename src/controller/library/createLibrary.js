const Libray = require("../../model/Library");


const addLibrary = async (req, res) => {
    const id_utilisateur = req.params.id_utilisateur;

    try {
        let library = new Libray({
            utilisateur: id_utilisateur,
        });
        let result = await library.save();
        console.log("Library add")
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
};

module.exports = { addLibrary };