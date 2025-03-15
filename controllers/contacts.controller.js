const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection('contacts').find();
  result.toArray().then(users => {
    return res.status(200).json(users)
  });
}

const getContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId});
  result.toArray().then(users => {
    return res.status(200).json(users[0])
  }).catch(error=>console.log(error));
}

const createContact = async (req, res) => {
  const {firstName, lastName, email, favoriteColor, birthday} = req.body;
  const newDoc = {firstName, lastName, email, favoriteColor, birthday};
  const newContact = await mongodb.getDatabase().db().collection('contacts').insertOne(newDoc);

  return res.status(201).json({contactId: newContact.insertedId})
}

const updateContact = async (req, res) => {
  const {firstName, lastName, email, favoriteColor, birthday} = req.body;
  const contactId = {_id: new ObjectId(req.params.id)};
  const updateDoc = {$set: {firstName, lastName, email, favoriteColor, birthday}};
  await mongodb.getDatabase().db().collection('contacts').updateOne(contactId, updateDoc);
  return res.status(200).json({message: `contact ${req.params.id} updated`})
}

const deleteContact = async (req, res) => {
  const contactId = {_id: new ObjectId(req.params.id)};
  const result = await mongodb.getDatabase().db().collection('contacts').deleteOne(contactId);
  if (result.deletedCount === 1) {
    return res.status(200).json({message: `contact ${req.params.id} deleted!`});
  } else {
    return res.status(404).json({error: "Document not found."});
  }
}

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}