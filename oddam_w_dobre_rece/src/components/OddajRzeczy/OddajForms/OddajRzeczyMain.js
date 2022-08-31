import React, {useState} from 'react';
import {useEffect} from "react";

import OddajRzeczyBags from "./OddajRzeczyBags";
import OddajRzeczyLocalization from "./OddajRzeczyLocalisation";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../../FireBaseConfig";
import OddajRzeczyStuff from "./OddajRzeczyStuff";
import OddajRzeczyThanx from "./OddajRzeczyThanx";
import OddajRzeczyAdress from "./OddajRzeczyAdress";
import OddajRzeczySummary from "./OddajRzeczySummary";
import HeaderUnderline from "../../HeaderUnderline";
import OddajSquare from "../Header/OddajSquare";
import OddajHeader from "../Header/OddajHeader";
import OddajBelt from "../OddajBelt";
import Contact from "../../MainComponent/Contact/Contact";
import OddajFormHeader from "./OddajFormHeader";


const OddajRzeczyMain = () => {
    const [inputsValue, setInputsValue] =
        useState({
            selectStuff: "", selectBags: "",
            selectLocalisation: "", dzieciom: false,
            matkom: false, bezdomnym: false,
            niepelnosprawnym: false, starszym: false,
            organisationName: "", street: "",
            city: "", postCode: "", phone: "",
            date: "", time: "", note: ""
        })
    // const [summary, setSummary] = useState([])
    const [counter, setCounter] = useState(1)

    const summaryReference = collection(db, 'summary')

    const handleChange = (e) => {
        // e.preventDefault()
        const value = e.target.type === "checkbox"
            ?
            e.target.checked
            :
            e.target.value
        setInputsValue({
            ...inputsValue,
            [e.target.name]: value
        })
    }

    const handleIncrease = () => {
        if (counter > 0 && counter < 6)
            setCounter(prevState => prevState + 1)
    }

    const handleDecrease = () => {
        if (counter > -1 && counter < 6)
            setCounter(prevState => prevState - 1)
    }

    // useEffect(() => {
    //     const getSummary = async () => {
    //         const data = await getDocs(summaryReference)
    //         // console.log(data)
    //         setSummary(data.docs.map((doc) => (
    //             {...doc.data(), id: doc.id})))
    //     };
    //     getSummary()
    //
    // }, [])

    // useEffect(()=>{
//     getDocs(summaryReference)
//         .then((data)=>{
//             setSummary(data.docs.map((doc) => (
//                         {...doc.data(), id: doc.id})))
//             console.log(data)
//         })
//         .catch(error => alert(error.code))
//
// }, [])

    const createSummary = async () => {


        await addDoc(summaryReference, {
            selectStuff: inputsValue.selectStuff,
            selectBags: inputsValue.selectBags,
            localisation: inputsValue.selectLocalisation,
            dzieciom: inputsValue.dzieciom,
            matkom: inputsValue.matkom,
            bezdomnym: inputsValue.bezdomnym,
            niepelnosprawnym: inputsValue.niepelnosprawnym,
            starszym: inputsValue.starszym,
            organisationName: inputsValue.organisationName,
            street: inputsValue.street,
            city: inputsValue.city,
            postCode: inputsValue.postCode,
            phone: inputsValue.phone,
            date: inputsValue.date,
            time: inputsValue.time,
            note: inputsValue.note
        })
    }

    return (
        <>
            <div className='navSpacer'></div>
            <OddajHeader counter = {counter}/>

            {/*<div className="wrapper wrapper--OddajForms">*/}

            {counter === 1 &&
                <>
                    <OddajBelt
                        text={'Uzupełnij szczegóły dotyczace twoich rzeczy. ' +
                            'Dzięki temu bedziemy wiedzieć komu najlepiej je przekazać.'}
                    />
                    <div className="wrapper wrapper--OddajForms">
                        <div className='oddaj1'>
                            <OddajFormHeader
                                step={'krok 1/4'}
                                text={'zaznacz co chcesz oddać:'}
                            />
                            <OddajRzeczyStuff
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </div>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt
                        text={'Wszytie rzeczy do oddania zapakuj w 60l worki.' +
                            'Dokładną instrukcję jak poprawnie spakować rzczy znajdziesz TUTAJ '}
                    />
                    <div className="wrapper wrapper--OddajForms">
                        <div className='oddaj1'>
                            <OddajFormHeader
                                step={'krok 1/2'}
                                text={'podaj liczbę 60l worków, w które spkowałeś/aś rzeczy:'}
                            />
                            <OddajRzeczyBags
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </div>
                </>
               }

            {counter === 3 &&
                <>
                    <OddajBelt
                        text={'Jeśli wiesz komu chcesz pomóc, możesz wpisać' +
                            ' nazwę organizacji w wyszukiwarce. Możesz też' +
                            'filtrować organizacje po ich lokalizacji bądź ' +
                            'celu ich pomocy'}
                    />
                    <div className="wrapper wrapper--OddajForms">
                        <div className='oddaj1'>
                            <OddajFormHeader
                                step={'krok 1/3'}
                                text={'lokalizacja:'}
                            />
                            <OddajRzeczyLocalization
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </div>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt
                        text={'Podaj adres oraz termin odbioru rzeczy'}
                    />
                    <div className="wrapper wrapper--OddajForms">
                        <div className='oddaj1'>
                            <OddajFormHeader
                                step={'krok 1/4'}
                                text={'podaj adres oraz termin ' +
                                    'odbioru rzeczy przez kuriera:'}
                            />
                            <OddajRzeczyAdress
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </div>
                </>
            }

            {counter === 5 &&

                <>
                    <div className="wrapper wrapper--OddajForms">
                        <div className='oddaj1'>
                            <OddajFormHeader
                                text={'podsumowanie twojej darowizny'}
                            />
                            <OddajRzeczySummary
                                createSummary={createSummary}
                                inputsValue={inputsValue}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </div>
                </>
            }

            {counter === 6 &&
                <OddajRzeczyThanx/>}
            {/*</div>*/}
            <Contact/>
        </>
    );
}
export default OddajRzeczyMain;