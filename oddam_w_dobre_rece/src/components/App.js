import NavBar from "./MainComponent/NavBar/NavBar";
import Header from "./MainComponent/Header/Header";
import SimpleSteps from "./MainComponent/SimpleSteps";
import AboutUs from "./MainComponent/AboutUs";
import WhoWeHelp from "./MainComponent/WhoWeHelp";
import Contact from "./MainComponent/Contact";
import ThreeColumns from "./MainComponent/ThreeColumns";

import {BrowserRouter} from "react-router-dom";
import {HashLink as Link, NavHashLink} from 'react-router-hash-link';
import MainComponent from "./MainComponent/MainComponent";
import Register from "./Register";
import {HashRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route  path='/' element ={ <MainComponent/>}/>
                <Route path='/rejestracja' element ={ <Register/>}/>
            </Routes>
        </HashRouter>

    );
}

export default App;
