import React from 'react';
import Contact from './Contact.js'
import '../compCSS/ContactsPage.css';

class ContactsPage extends React.Component {
    render() {
       return (
         <React.Fragment>
            <Contact/>
            <Contact/>
         </React.Fragment>
       )
    }
  }
  export default ContactsPage;