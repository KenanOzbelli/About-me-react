const contactController = require('express').Router();
const db = require('../../models');

contactController.post('/', (req, res) => {
    const { name, email, message} = req.body;
    db.Contacts.create({ name, email, message })
      .then(user =>{
          res.json(user)})
      .catch(err => res.json(err));
});



module.exports = contactController;