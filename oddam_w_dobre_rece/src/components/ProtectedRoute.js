import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./FireBaseConfig";
import OddajMain from "./OddajRzeczy/OddajMain";
import Title from "./Title";
import {Link} from "react-router-dom";

const ProtectedRoute = () => {
    const [user, loading, error] = useAuthState(auth);
    // if (!user?.email) {
    //     return (
    //         <>
    //             <div className='headerSpacer'></div>
    //             <main className='wrapper wrapper--login'>
    //                 <Title text1={'zaloguj się'}
    //                        text2={''}
    //                        classContainer={''}
    //                        classH2={''}
    //                        classUnderline={'login__underline'}
    //                 />
    //                 <Link to='/'>
    //                     <button className='buttonLogin'>strona główna</button>
    //                 </Link>
    //
    //             </main>
    //         </>
    //     )
    // }
    return (
        <OddajMain/>
    );
}

export default ProtectedRoute;