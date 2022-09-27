import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./FireBaseConfig";
import OddajMain from "./OddajRzeczy/OddajMain";

const ProtectedRoute = () => {
    const [user, loading, error] = useAuthState(auth);
    // if (!user?.email) {
    //     return (
    //         <div style={{
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             height: '100vh'
    //         }}>
    //             <h2>zaloguj się</h2>
    //
    //         </div>
    //
    //     )
    //
    //
    // }
    return (
        <OddajMain/>
    );
};

export default ProtectedRoute;