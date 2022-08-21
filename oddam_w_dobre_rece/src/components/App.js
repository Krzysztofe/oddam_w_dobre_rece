import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import ThreeColumns from "./Header/ThreeColumns";

import {BrowserRouter} from "react-router-dom";
import {HashLink as Link, NavHashLink} from 'react-router-hash-link';
import MainComponent from "./MainComponent";
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
