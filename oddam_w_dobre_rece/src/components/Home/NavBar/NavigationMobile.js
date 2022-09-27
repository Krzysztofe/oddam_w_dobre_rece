import React from 'react';
import NavLinks from "./NavLinks";
import {RiMenuFill} from 'react-icons/ri';
import {GrFormClose} from 'react-icons/gr';
import Tshirt from '../../../asets/IconTshirt.png';
import {useState} from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

const handleCloseMenue = () => {
  setOpen(false)
}

    return (
        <nav className={`navigationMobile ${open && 'navigationMobile--open'} `}>
            {open
                ?
                <NavLinks handleCloseMenue = {handleCloseMenue}/>
                :
                <img src = {Tshirt} className= 'navigationMobile__tshirt'
                     alt = 'T-shirt logo'/>
            }
            {open
                ?
                <GrFormClose className='iconCross'
                             onClick={() => setOpen(!open)}/>
                :
                <RiMenuFill className='iconHamburger'
                            onClick={() => setOpen(!open)}/>
            }
        </nav>
    );
};

export default MobileNavigation;