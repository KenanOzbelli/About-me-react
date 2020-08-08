const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type:String,
        trim:true,
    },
    message:{
        type: String
    }
});

let Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;