import React from 'react';
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <main className='wrapper wrapper--logout'>
            <h2 className= 'logout__h2'>
                wylogowanie naspapiło pomyślnie
            </h2>
            <Link to = '/'>
                <button>strona główna</button>
            </Link>

        </main>
    );
};

export default Logout;