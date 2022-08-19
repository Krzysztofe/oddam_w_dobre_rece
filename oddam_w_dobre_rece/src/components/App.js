import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";


import {BrowserRouter} from "react-router-dom";
import {HashLink as Link, NavHashLink} from 'react-router-hash-link';


function App() {
    return (
        <BrowserRouter>
            <>
                <NavBar/>
                <Header/>
                <SimpleSteps/>
                <AboutUs/>
                <WhoWeHelp/>
                <Contact/>
            </>
        </BrowserRouter>

    );
}

export default App;
