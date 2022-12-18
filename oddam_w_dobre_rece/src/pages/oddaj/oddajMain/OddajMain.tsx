import React, {FC} from "react";
import OddajHeader from "../oddajHeader/OddajHeader";
import OddajStep1 from "../oddajContainers/oddajStep1/OddajStep1";
import OddajStep2 from "../oddajContainers/oddajStep2/OddajStep2";
import OddajStep3 from "../oddajContainers/oddajStep3/OddajStep3";
import OddajStep4 from "../oddajContainers/oddajStep4/OddajStep4";
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
            {counter === 1 && <OddajStep1/>}
            {counter === 2 && <OddajStep2/>}
            {counter === 3 && <OddajStep3/>}
            {counter === 4 && <OddajStep4/>}
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