import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./MainComponent/NavBar/NavBar";
import MainComponent from "./MainComponent/MainComponent";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Form from "./OddajRzeczy/OddajRzeczyMain"
import OddajRzeczyBags from "./OddajRzeczy/OddajRzeczyBags";
import OddajRzeczyLocalization from "./OddajRzeczy/OddajRzeczyLocalisation";
import {db} from './FireBaseConfig'
// import {db} from './FireBaseConfig'
import {collection, getDocs} from 'firebase/firestore'
import OddajRzeczyMain from "./OddajRzeczy/OddajRzeczyMain";

function App() {

    return (
        <BrowserRouter>
            {/*<NavBar/>*/}
            <Routes>
                <Route path='/' element={<MainComponent/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddajRzeczy' element={<OddajRzeczyMain/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
