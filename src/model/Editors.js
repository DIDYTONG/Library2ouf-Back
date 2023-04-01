const mongoose = require('mongoose');
const editorsSchema = new mongoose.Schema({
    nom: String,
    series: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Series",
        },
    ]
});

const Editors = mongoose.model('Editors', editorsSchema);

module.exports = Editors;
