const express = require('express');
const router = express.Router();
const { ajouterUtilisateur } = require('../controller/users/createUser');
const { readUser } = require('../controller/users/readUser');
const { updateUser } = require('../controller/users/updateUser');
const { deletUser } = require('../controller/users/deletUser');
const errorHandler = require('../utilities/middleware/errorHandler');
const { addBooks } = require('../controller/books/createBooks');
const { updateBooks } = require('../controller/books/updateBooks');
const {deletBook} = require("../controller/books/deleteBook");
const {readBook} = require("../controller/books/readBook");
const {attribuerLivreUtilisateur} = require('../controller/users/addBooks')

router.post('/utilisateurs', ajouterUtilisateur);
router.get('/utilisateurs/:id', readUser);
router.put('/utilisateurs/:id', updateUser);
router.delete('/utilisateurs/:id', deletUser);

router.post('/books', addBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deletBook);
router.get('/books/:id', readBook);

router.post('/utilisateurs/:id_utilisateur/livres/:id_livre', attribuerLivreUtilisateur);




router.use(errorHandler);

module.exports = router;
