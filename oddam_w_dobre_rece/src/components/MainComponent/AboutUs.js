import React from 'react';
import Underline from "./Underline";

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className="wrapper wrapper--aboutUs">
                <aside className="aboutUs__leftContainer">
                    <h2 className="aboutUs__h2">o nas</h2>
                    <Underline/>
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