const routes = require('express').Router();

const contactRoute = require('./contacts')

routes.use('/contacts', contactRoute);

module.exports = routes;