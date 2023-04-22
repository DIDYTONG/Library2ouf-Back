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


const {readLibrary} = require("../controller/library/readLibrary");
const {readAllBooks} = require("../controller/books/readAllBooks");
const {addBookToLibrary} = require("../controller/library/addBookToLibrary");
const {updateBookStatus} = require("../controller/library/updateBookStatus");
const {removeBook} = require("../controller/users/removeBook");

router.post('/utilisateurs', addUser);
router.get('/utilisateurs/:id', readUser);
router.put('/utilisateurs/:id', updateUser);
router.delete('/utilisateurs/:id', deletUser);

router.post('/books', addBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deletBook);
router.get('/books/:id', readBook);
router.get('/books', readAllBooks)

router.post('/utilisateurs/:id_utilisateur/livres/:id_livre', attribuerLivreUtilisateur);
router.put('/utilisateurs/:userId/livres/:bookId', addRead)

router.post('/library/utilisateur/:id_utilisateur', addLibrary)

router.get('/library/:id', readLibrary);
router.post('/library/:libraryId/book/:bookId/:status', updateBookStatus)
router.delete('/:userId/livres/:livreId', removeBook);
router.post('/library/:id_library/user/:id_user', addBookToLibrary)

router.use(errorHandler);

module.exports = router;
