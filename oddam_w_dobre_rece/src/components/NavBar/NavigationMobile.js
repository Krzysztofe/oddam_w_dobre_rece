import React from 'react';
import NavLinks from "./NavLinks";
import {RiMenuFill} from 'react-icons/ri';
import {GrFormClose} from 'react-icons/gr'
import {useState} from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

const handleCloseMenue = () => {
  setOpen(false)
}

    return (
        <nav className='navigationMobile'>
            {open
                ?
                <GrFormClose className='iconHamburger' onClick={() => setOpen(!open)}/>
                :
                <RiMenuFill className='iconHamburger' onClick={() => setOpen(!open)}/>
            }
            {open
                ?
                <NavLinks handleCloseMenue = {handleCloseMenue}/>
            :
            <div className= 'navigationMobile__logo '> </div>
            }
        </nav>
    );
};

export default MobileNavigation;