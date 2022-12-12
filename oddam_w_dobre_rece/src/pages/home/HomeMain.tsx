import TitleDecor from '../../components/TitleDecor'
import Header from "./Header";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./section_4/Section_4";
import Section_5 from "./section_5/Section_5";
import Footer from "./Footer";
import Form from "./section_5/Section_5_Form"

const HomeMain = () => {

    return (
        <>
            <Header>
                <TitleDecor text={['zacznij pomagać!',
                    'Oddaj niechciane rzeczy' +
                    ' w zaufane ręce']}
                            classH2={'header__h2'}/>
            </Header>

            <Section_1/>

            <Section_2>
                <TitleDecor text={['wystarczą 4 proste kroki']}
                            classContainer={'section-2__decoContainer'}
                            classH2={''}
                            classUnderline={'section-2__decoration'}/>
            </Section_2>

            <Section_3>
                <TitleDecor text={['o nas']}
                            classContainer={''}
                            classH2={''}
                            classUnderline={'section-3__decoration'}/>
            </Section_3>
            <Section_4>
                <TitleDecor text={['komu pomagamy?']}
                            classContainer={''}
                            classH2={''}
                            classUnderline={'section-4__decoration'}/>

            </Section_4>
            <Section_5>
                <TitleDecor text={['skontaktuj się z nami']}
                            classUnderline={'section-5__decoration'}/>
                <Form/>
            </Section_5>
            <Footer/>
        </>
    );
};

export default HomeMain;