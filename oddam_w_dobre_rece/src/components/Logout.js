import React from 'react';
import {NavHashLink} from "react-router-hash-link";

const Logout = () => {
    return (
        <main className='wrapper wrapper--logout'>
            <h2 className= 'logout__h2'>
                wylogowanie naspapiło pomyślnie
            </h2>
            <NavHashLink to = '/'>
                <button>strona główna</button>
            </NavHashLink>

        </main>
    );
};

export default Logout;