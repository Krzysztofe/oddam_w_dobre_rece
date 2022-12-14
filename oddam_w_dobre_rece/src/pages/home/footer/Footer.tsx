import React from 'react'
import {FC} from 'react'

const Facebook = require("../../../asets/Facebook.png")
const Instagram = require( "../../../asets/Instagram.png")

const Footer: FC = () => {
    return (
        <footer className='wrapper wrapper--footer'>
            <div className="footer__container">
                <a href='src/pages/home/Footer' className='contact__logo'>
                    <img src={Facebook}  alt='Facebook_logo'/>
                </a>
                <a href='src/pages/home/Footer' className='contact__logo'>
                    <img src={Instagram}  alt='Instagram_logo'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;