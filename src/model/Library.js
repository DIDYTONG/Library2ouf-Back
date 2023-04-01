const mongoose = require('mongoose');
const libraryShema = new mongoose.Schema({
    bookStatus: {
        read: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Livres'
            }
        ],
        inProccess: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Livres'
            }
        ],
        end: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Livres'
            }
        ]
    },
    utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateurs",
    }
});

const Libray = mongoose.model('Library', libraryShema);
module.exports = Libray;
