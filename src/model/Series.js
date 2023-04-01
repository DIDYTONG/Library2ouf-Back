const mongoose = require('mongoose');
const seriesSchema = new mongoose.Schema({
    nom: String,
    editor: String,
    livres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Livre",
        },
    ]
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;
