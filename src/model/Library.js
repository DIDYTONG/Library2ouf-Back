const mongoose = require('mongoose');
const libraryShema = new mongoose.Schema({
    book: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Livres'
        }
    ],
    utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateurs",
    }
});

const Libray = mongoose.model('Library', libraryShema);
module.exports = Libray;
