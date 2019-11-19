import React from 'react';
import '../compCSS/Contact.css';
import pic from '../images/images/headshot.jpg';

class Contact extends React.Component {
    render() {
       return (
         <div id="exec-contact">
            <img id="contact-img" src={pic} alt="Staff Picture"/>
            <br></br>
            <a id="title">President</a>
            <br></br>
            <a id="name">Miriam Tan</a>
            <br></br>
            <a href="tel:7577443516">(757) 744-3516</a>
            <br></br>
            <a href="mailto:tanmr1@gcc.edu">tanmr1@gcc.edu</a>
            <br></br>
         </div>

       )
    }
  }
  export default Contact;