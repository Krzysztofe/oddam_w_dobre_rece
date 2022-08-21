import React from 'react';
import Tshirt from '../asets/IconTshirt.png';
import Facebook from '../asets/Facebook.png';
import Instagram from '../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
       <section className="contact">
           <div className="wrapper wrapper--contact" id = 'contact'>
               <div className="contact__container">
                   <img className= 'contact__t-shirt' src = {Tshirt} alt = 't-shirt'/>
                   <div className="contact__containerInfo">
                       <h2 className='contact__h2'>skontaktuj się z nami</h2>
                       <a href='https://www.facebook.com/'>
                           <img src={Facebook} className='contact__logo' alt='Facebook_logo'/>
                       </a>
                       <a href='https://www.instagram.com/'>
                           <img src={Instagram} className='contact__logo' alt='Instagram_logo'/>
                       </a>
                   </div>

               </div>


           </div>
       </section>
    );
};

export default Contact;