const express = require('express');

const contactController = require('../controllers/contacts.controller');

const router = express.Router();

// -> /contact
router.get('/', contactController.getAllContacts);

// -> /contact/id
router.get('/:id', contactController.getContact)

module.exports = router;