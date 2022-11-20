import React from "react";
import {motion} from "framer-motion";
import Buttons from "../OddajButtons";
import OddajSummaryTable from "./OddajSummaryTable";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";


const OddajSummary = () => {

    const inputsValues = useSelector((state: RootState) => state.inputsValues.value)

    const selectDataPrint = (
        message: string,
        inputsValues: string | number) => {
        return inputsValues === '-- Wybierz --' ? message : inputsValues
    }

    const bagsDescription = (): any => {
        if (inputsValues.selectBags === 1) {
            return 'worek'
        } else if (inputsValues.selectBags > 1 && inputsValues.selectBags < 5)
            return 'worki'

        else if (inputsValues.selectBags === '-- Wybierz --') {
            return null
        }
        return 'worków'
    }

    return (
        <motion.section className='oddajForm__inputs'
                        initial={{opacity: 0, y: -40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.1}}>
            <h3 className='summary__h3'>oddajesz:</h3>

            <div className="summary__topContainer">
                <div className="summary__icon1"></div>
                <p className='summary__p'> {selectDataPrint('wróć do kroku 2/4 i podaj ilość worków', inputsValues.selectBags)}
                   <> </> {bagsDescription()}
                    {inputsValues.selectStuff ? <>, {inputsValues.selectStuff}</> : null}
                    {inputsValues.dzieciom ? <>, dzieciom</> : null}
                    {inputsValues.matkom ? <>, samotnym matkom</> : null}
                    {inputsValues.bezdomnym ? <>, bezdomnym</> : null}
                    {inputsValues.niepelnosprawnym ? <>, niepełnosprawnym</> : null}
                    {inputsValues.starszym ? <>, osobom starszym</> : null}
                </p>
            </div>

            <div className="summary__topContainer">
                <div className="summary__icon2"></div>
                <p className='summary__p'>
                    {inputsValues.selectLocalisation === '-- Wybierz --'
                        ?
                        null
                        :
                        'dla lokalizacji:'}
                    <> </>
                    {selectDataPrint('wróć do kroku 3/4 i podaj lokalizację', inputsValues.selectLocalisation)}
                    {inputsValues.organisationName ? <>, {inputsValues.organisationName}</> : null}
                </p>
            </div>
            <OddajSummaryTable/>
            <Buttons/>
        </motion.section>
    );
};

export default OddajSummary;