import React, {useState} from 'react';
import {useEffect} from "react";

import OddajForm2 from "./OddajForms/OddajForm2";
import OddajForm1 from "./OddajForms/OddajForm1";
import OddajForm3 from "./OddajForms/OddajForm3";
import OddajForm4 from "./OddajForms/OddajForm4";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../FireBaseConfig";

import OddajRzeczySummary from "./OddajForms/OddajRzeczySummary";
import HeaderUnderline from "../HeaderUnderline";
import OddajSquare from "./Header/OddajSquare";
import OddajHeader from "./Header/OddajHeader";
import OddajBelt from "./OddajBelt";
import Contact from "../MainComponent/Contact/Contact";
import OddajFormTop from "./OddajForms/OddajFormTop";

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

            {counter === 1 &&
                <>
                    <OddajBelt
                        text={'Uzupełnij szczegóły dotyczace twoich rzeczy. ' +
                            'Dzięki temu bedziemy wiedzieć komu najlepiej je przekazać.'}
                    />
                    <main className="wrapper wrapper--oddajMain">
                        <div className='oddajMain'>

                            <OddajFormTop
                                step={'krok 1/4'}
                                text={'zaznacz co chcesz oddać:'}
                            />
                            <OddajForm1
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </main>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt
                        text={'Wszytie rzeczy do oddania ' +
                            'zapakuj w 60l worki. Dokładną' +
                            ' instrukcję jak poprawnie spakować' +
                            ' rzczy znajdziesz TUTAJ '}
                    />
                    <main className="wrapper wrapper--oddajMain">
                        <div className='oddajMain'>
                            <OddajFormTop
                                step={'krok 2/4'}
                                text={'podaj liczbę 60l worków,' +
                                    ' w które spkowałeś/aś rzeczy:'}
                            />
                            <OddajForm2
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </main>
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
                    <main className="wrapper wrapper--oddajMain">
                        <div className='oddajMain'>
                            <OddajFormTop
                                step={'krok 3/4'}
                                text={'lokalizacja:'}
                            />
                            <OddajForm3
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </main>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt
                        text={'Podaj adres oraz termin odbioru rzeczy'}
                    />
                    <main className="wrapper wrapper--oddajMain">
                        <div className='oddajMain'>
                            <OddajFormTop
                                step={'krok 4/4'}
                                text={'podaj adres oraz termin ' +
                                    'odbioru rzeczy przez kuriera:'}
                            />
                            <OddajForm4
                                inputsValue={inputsValue}
                                handleChange={handleChange}
                                counter={counter}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        </div>
                    </main>
                </>
            }

            {counter === 5 &&

                <>
                    <main className="wrapper wrapper--oddajMain">
                        <div className='oddajMain'>
                            <OddajFormTop
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
                    </main>
                </>
            }

            {counter === 6 &&
                <main className="wrapper wrapper--oddajMain">
                    <div className='oddajMain'>
                        <HeaderUnderline
                            text1={'dziękujemy za przesłanie formularza'}
                            text2={'na maila prześlemy wszelkie' +
                                'informacje o odbiorze'}
                            classContainer = {'oddajThnx__container'}
                            classH2 = {'oddajThnx__h2'}
                            classUnderline = {'oddajThnx__underline'}
                        />

                    </div>
                </main>}
            <Contact/>
        </>
    );
}
export default OddajRzeczyMain;