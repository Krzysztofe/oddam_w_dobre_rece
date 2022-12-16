import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../data/FireBaseConfig";
import {Link} from "react-router-dom";
import OddajMain from "../oddajMain/OddajMain";
import TitleDecor from "../../../components/titleDecor/TitleDecor";

const ProtectedRouteOddajMain = () => {
    const [user] = useAuthState(auth);

    if (!user?.email) {
        return (
            <>
                <div className='headerSpacer'></div>
                <main className='wrapper wrapper--login'>
                    <TitleDecor text={['zaloguj się']}
                                classContainer=''
                                classH2=''
                                classUnderline='login__underline'/>
                    <Link to='/'>
                        <button className='buttonLogin'>strona główna</button>
                    </Link>
                </main>
            </>
        )
    }
    return (
        <OddajMain/>
    );
}

export default ProtectedRouteOddajMain;