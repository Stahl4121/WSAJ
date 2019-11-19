import React from 'react';
import '../compCSS/Home.css';
import pic from '../images/home91-1.png';

class Home extends React.Component {
    render() {
       return (
         <div>
            <div id="home-image-wrap">
               <img id="homepage-img" src={pic} alt="WSAJ Picture"/>
               <p> Welcome Music Lovers! </p>
            </div>
            
            <div id="news">
               <h2>Recent Updates</h2>
               <p>Here are some updates.</p>
            </div>
         </div>
       )
    }
  }
  export default Home;