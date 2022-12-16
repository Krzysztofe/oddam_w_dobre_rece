import React, {FC} from "react";
import OddajHeader from "../oddajHeader/OddajHeader";
import OddajContainer_1 from "../oddajContainers/oddajContainer_1/OddajContainer_1";
import OddajContainer_2 from "../oddajContainers/oddajContainer_2/OddajContainer_2";
import OddajContainer_3 from "../oddajContainers/oddajContainer_3/OddajContainer_3";
import OddajContainer_4 from "../oddajContainers/oddajContainer_4/OddajContainer_4";
import OddajContainerSummary from "../oddajContainers/oddajContainerSummary/OddajContainerSummary";
import OddajContainerThnx from "../oddajContainers/oddajContainerThnx/OddajContainerThnx";
import Section_5 from "../../home/section_5/Section_5";
import Footer from "../../home/footer/Footer";
import TitleDecor from "../../../components/titleDecor/TitleDecor";
import Form from "../../home/section_5/Section_5_Form";
import {useSelector} from "react-redux";
import {RootState} from '../../../redux/store'

const OddajMain: FC = () => {


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
                <TitleDecor text={['skontaktuj się z nami']}
                            classUnderline={'section-5__decoration'}/>
                <Form/>
            </Section_5>
            <Footer/>
        </>
    );
}
export default OddajMain;