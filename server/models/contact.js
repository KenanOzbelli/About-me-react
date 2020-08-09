const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const ContactSchema = new Schema({
    name: {
        type: String,
        trim:true,
        maxlength:13,
        require: [true, 'I know you have a Name']
    },
    email: {
        type:String,
        trim:true,
        minlength:5,
        maxlength:20,
        required: [true, 'Email Required!'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
   
    },
    message:{
        type: String
    }
});


let Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;