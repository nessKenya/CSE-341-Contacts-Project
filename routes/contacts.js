const express = require('express');

const contactController = require('../controllers/contacts.controller');
const contactValidators = require('../validators/contacts.validators')


const router = express.Router();

// get all
router.get('/', contactController.getAllContacts);

// get specific
router.get('/:id', contactController.getContact);

// create
router.post('/', contactValidators.validateContact, contactController.createContact);

// update
router.put('/:id', contactValidators.updateContact, contactController.updateContact);

// delete
router.delete('/:id', contactController.deleteContact);

module.exports = router;