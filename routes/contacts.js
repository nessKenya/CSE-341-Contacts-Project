const express = require('express');

const contactController = require('../controllers/contacts.controller');

const router = express.Router();

// get all
router.get('/', contactController.getAllContacts);

// get specific
router.get('/:id', contactController.getContact);

// create
router.post('/', contactController.createContact);

// update
router.put('/:id', contactController.updateContact);

// delete
router.delete('/:id', contactController.deleteContact);

module.exports = router;