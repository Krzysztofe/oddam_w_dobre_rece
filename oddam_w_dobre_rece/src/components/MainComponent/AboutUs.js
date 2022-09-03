import React from 'react';
import Underline from "./Underline";
import HeaderUnderline from "../Title";

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className="wrapper wrapper--aboutUs">
                <aside className="aboutUs__leftContainer">

                    <HeaderUnderline
                        text1={'o nas'}
                        // classContainer = {'simpleSteps__headerUnderlineContainer'}
                        // classH2 = {'simpleSteps__headerUnderlineH2'}
                        classUnderline = {'simpleSteps__headerUnderline'}
                    />
                    <p className="aboutUs__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis minima quia ullam unde?
                        Aliquid blanditiis ea esse hic libero, nobis nostrum quod reiciendis.
                    </p>
                    <div className="aboutUs__signature"> </div>
                </aside>
                <aside className="aboutUs__rightContainer"> </aside>

            </div>
        </section>
    );
};

export default AboutUs;