const express = require('express');
const router = express.Router();

const { readUser } = require('../controller/users/readUser');
const { updateUser } = require('../controller/users/updateUser');
const { deletUser } = require('../controller/users/deletUser');
const errorHandler = require('../utilities/middleware/errorHandler');
const { addBooks } = require('../controller/books/createBooks');
const { updateBooks } = require('../controller/books/updateBooks');
const {deletBook} = require("../controller/books/deleteBook");
const {readBook} = require("../controller/books/readBook");
const {attribuerLivreUtilisateur} = require('../controller/users/addBooks')
const {addRead} = require("../controller/users/addRead");
const {addUser} = require("../controller/users/createUser");
const {addLibrary} = require("../controller/library/createLibrary");
const {addEndLibrary} = require("../controller/library/addEnd");
const {addInProcess} = require("../controller/library/addInProcess");
const {addStatus} = require("../controller/library/addRead");

router.post('/utilisateurs', addUser);
router.get('/utilisateurs/:id', readUser);
router.put('/utilisateurs/:id', updateUser);
router.delete('/utilisateurs/:id', deletUser);

router.post('/books', addBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deletBook);
router.get('/books/:id', readBook);

router.post('/utilisateurs/:id_utilisateur/livres/:id_livre', attribuerLivreUtilisateur);
router.put('/utilisateurs/:userId/livres/:bookId', addRead)

router.post('/library/utilisateur/:id_utilisateur', addLibrary)
router.post('/library/:id_library/livre/:id_livre/end', addEndLibrary);
router.post('/library/:id_library/livre/:id_livre/inProcess', addInProcess);
router.post('/library/:id_library/livre/:id_livre/status/:status', addStatus)



router.use(errorHandler);

module.exports = router;
