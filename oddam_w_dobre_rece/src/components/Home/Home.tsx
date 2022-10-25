import React from "react"
import Title from '../Title'
import Header from "./Header";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4/Section_4";
import Section_5 from "./Section_5/Section_5";
import Footer from "./Footer";
import Form from "./Section_5/Section_5_Form";

const Home = () => {
    return (
            <>
                <Header>
                    <Title text={['zacznij pomagać!',
                            'Oddaj niechciane rzeczy' +
                            ' w zaufane ręce']}
                        classH2={'header__h2'}/>
                </Header>

                <Section_1/>

                <Section_2>
                    <Title text={['wystarczą 4 proste kroki']}
                           classContainer={'section-2__decoContainer'}
                           classH2={''}
                           classUnderline={'section-2__decoration'}/>
                </Section_2>

                <Section_3>
                    <Title text={['o nas']}
                           classContainer={''}
                           classH2={''}
                           classUnderline={'section-3__decoration'}/>
                </Section_3>

                <Section_4>
                    <Title text={['komu pomagamy?']}
                           classContainer={''}
                           classH2={''}
                           classUnderline={'section-4__decoration'}/>
                </Section_4>

                <Section_5>
                    <Title text={['skontaktuj się z nami']}
                           classUnderline={'section-5__decoration'}/>
                    <Form/>
                </Section_5>

                <Footer/>
             </>
    );
};

export default Home;