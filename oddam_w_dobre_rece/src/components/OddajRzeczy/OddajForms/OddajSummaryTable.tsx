import React, {useContext} from 'react';
// import {GlobalContext} from "../oddajContext/GlobalContextProv";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const OddajSummaryTable = () => {

    // const {inputsValue} = useContext(GlobalContext)
    const inputsValues = useSelector((state:RootState) => state.inputsValues.value)


    return (
        <div className="summary__tables">
            <table className="summary__tableLeft">

                <thead>
                <tr>
                    <td className='summary__thead'>adres odbioru</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className='summary__td'> ulica:</td>
                    <td className='summary__td'>{inputsValues.street}</td>
                </tr>
                <tr>
                    <td className='summary__td'> miasto:</td>
                    <td className='summary__td'>{inputsValues.city}</td>
                </tr>
                <tr>
                    <td className='summary__td'> kod pocztowy:</td>
                    <td className='summary__td'>{inputsValues.postCode}</td>
                </tr>
                <tr>
                    <td className='summary__td'> numer telefonu:</td>
                    <td className='summary__td'>{inputsValues.phone}</td>
                </tr>
                </tbody>

            </table>

            <table className="summary__tableRight">

                <thead>
                <tr>
                    <td className='summary__thead'>termin odbioru</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className='summary__td'> data:</td>
                    <td className='summary__td'>{inputsValues.date}</td>
                </tr>
                <tr>
                    <td className='summary__td'> godzina:</td>
                    <td className='summary__td'>{inputsValues.time}</td>
                </tr>
                <tr>
                    <td className='summary__td'> uwagi do kuriera:</td>
                    <td className='summary__td'>{inputsValues.note}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OddajSummaryTable;