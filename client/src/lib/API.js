import axios from 'axios';

export default {
 Contacts: {
    create: function( name, email, message){
      return axios.post('/api/contacts', { name, email, message})
    }
 }
}
