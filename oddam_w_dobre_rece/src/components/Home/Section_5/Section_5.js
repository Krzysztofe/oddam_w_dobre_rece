import React from 'react';
import Form from './Section_5_Form'
import Tshirt from '../../../asets/IconTshirt.png';
import Facebook from '../../../asets/Facebook.png';
import Instagram from '../../../asets/Instagram.png';
import {BsFillTelephoneFill} from 'react-icons/bs'
import HeaderUnderline from "../../Title";

const Contact = () => {
    return (
        <section className="wrapper wrapper--section-5" id='contact'>
            <div className="section-5__opacity">
                <div className='section-5__imageMobile'></div>
                <aside className="section-5__right">
                    <HeaderUnderline
                        text1={'skontaktuj się z nami'}
                        classUnderline={'section-5__decoration'}
                    />
                    <Form/>
                </aside>
            </div>
        </section>

    )
        ;
};

export default Contact;