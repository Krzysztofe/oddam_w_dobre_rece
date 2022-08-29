import React from 'react';
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import Contact from "./Contact/Contact";

const MainComponent = () => {
    return (

            <>
                <Header/>
                <ThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>
                <WhoWeHelp/>
                <Contact/>
            </>

    );
};

export default MainComponent;