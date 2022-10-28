import React, {useContext, FC} from "react";
import OddajHeader from "./OddajHeader/OddajHeader";
import OddajContainer_1 from "./OddajContainers/OddajContainer_1";
import OddajContainer_2 from "./OddajContainers/OddajContainer_2";
import OddajContainer_3 from "./OddajContainers/OddajContainer_3";
import OddajContainer_4 from "./OddajContainers/OddajContainer_4";
import OddajContainerSummary from "./OddajContainers/OddajContainerSummary";
import OddajContainerThnx from "./OddajContainers/OddajContainerThnx";
import Section_5 from "../Home/Section_5/Section_5";
import Footer from "../Home/Footer";
import {GlobalContext} from "./OddajContext/GlobalContextProv";
import Title from "../Title";
import Form from "../Home/Section_5/Section_5_Form";





const OddajMain: FC = () => {

    const {counter} = useContext(GlobalContext)


    return (
        <>
            <OddajHeader/>
            {counter === 1 && <OddajContainer_1/>}
            {counter === 2 && <OddajContainer_2/>}
            {counter === 3 && <OddajContainer_3/>}
            {counter === 4 && <OddajContainer_4/>}
            {counter === 5 && <OddajContainerSummary/> }
            {counter === 6 && <OddajContainerThnx/>}
            <Section_5>
                <Title text={['skontaktuj się z nami']}
                       classUnderline={'section-5__decoration'}/>
                <Form/>
            </Section_5>
            <Footer/>
        </>
    );
}
export default OddajMain;