import React, {useContext, FC} from "react";
import OddajHeader from "./oddajHeader/OddajHeader";
import OddajContainer_1 from "./oddajContainers/OddajContainer_1";
import OddajContainer_2 from "./oddajContainers/OddajContainer_2";
import OddajContainer_3 from "./oddajContainers/OddajContainer_3";
import OddajContainer_4 from "./oddajContainers/OddajContainer_4";
import OddajContainerSummary from "./oddajContainers/OddajContainerSummary";
import OddajContainerThnx from "./oddajContainers/OddajContainerThnx";
import Section_5 from "../Home/section_5/Section_5";
import Footer from "../Home/Footer";
// import {GlobalContext} from "./oddajContext/GlobalContextProv";
import Title from "../Title";
import Form from "../Home/section_5/Section_5_Form";
import {Provider, useSelector} from "react-redux";
import {RootState, store} from '../../store/store'

const OddajMain: FC = () => {

    // const {counter} = useContext(GlobalContext)

    const counter = useSelector((state: RootState) => state.btnCounter.value)

    return (
        <>
            <OddajHeader/>
            {counter === 1 && <OddajContainer_1/>}
            {counter === 2 && <OddajContainer_2/>}
            {counter === 3 && <OddajContainer_3/>}
            {counter === 4 && <OddajContainer_4/>}
            {counter === 5 && <OddajContainerSummary/>}
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