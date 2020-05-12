const apiControllers = require('express').Router();

apiControllers.use('/contacts', require('./contactController'));


module.exports = apiControllers;
