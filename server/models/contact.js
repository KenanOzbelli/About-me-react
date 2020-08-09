const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        trim:true,
        require: true,
        minLength: 4,
        maxLength: 15
    },
    email: {
        type:String,
        required: true,
        lowercase: true
     
    },
    message:{
        type: String,
        trim:true
    }

});
ContactSchema.path('email').validate(function (email) {
    var emailRegex12321 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex12321.test(email); // Assuming email has a text attribute
 
 }, 'The e-mail field cannot be empty.')

let Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;