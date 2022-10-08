import React, {useState} from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {auth, db} from "../FireBaseConfig";
import {useAuthState} from "react-firebase-hooks/auth";

import OddajHeader from "./OddajHeader/OddajHeader";
import OddajBelt from "./Belt";

import OddajFormTop from "./OddajForms/OddajFormTop";
import OddajForm2 from "./OddajForms/OddajForm2";
import OddajForm1 from "./OddajForms/OddajForm1";
import OddajForm3 from "./OddajForms/OddajForm3";
import OddajForm4 from "./OddajForms/OddajForm4";
import OddajSummary from "./OddajForms/OddajSummary";
import OddajThanx from "./OddajForms/OddajThanx";
import Section_5 from "../Home/Section_5/Section_5";
import Footer from "../Home/Footer";

const OddajMain = () => {
    const [user, loading, error] = useAuthState(auth);

    const [inputsValue, setInputsValue] =
        useState({
            selectStuff: "", selectBags: "-- Wybierz --",
            selectLocalisation: "-- Wybierz --", dzieciom: false,
            matkom: false, bezdomnym: false,
            niepelnosprawnym: false, starszym: false,
            organisationName: "", street: "",
            city: "", postCode: "", phone: "",
            date: "", time: "", note: "", uid: ""
        })

    const [counter, setCounter] = useState(1)

    const summaryReference = collection(db, 'summary')

    const handleChange = (e) => {
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
            note: inputsValue.note,
            uid: user?.uid
        })
    }

    return (
        <>
            <OddajHeader counter={counter}/>

            {counter === 1 &&
                <>
                    <OddajBelt text={'Uzupełnij szczegóły dotyczace' +
                        ' twoich rzeczy. Dzięki temu bedziemy wiedzieć' +
                        ' komu najlepiej je przekazać.'}/>

                    <main className="wrapper wrapper--oddajMain">

                        <OddajFormTop step={'krok 1/4'}
                                      text={'zaznacz co chcesz oddać:'}/>

                        <OddajForm1
                            inputsValue={inputsValue}
                            handleChange={handleChange}
                            handleIncrease={handleIncrease}/>

                    </main>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt text={'Wszytie rzeczy do oddania ' +
                        'zapakuj w 60l worki. Dokładną' +
                        ' instrukcję jak poprawnie spakować' +
                        ' rzczy znajdziesz TUTAJ '}/>

                    <main className="wrapper wrapper--oddajMain">

                        <OddajFormTop step={'krok 2/4'}
                                      text={'podaj liczbę 60 l. worków,' +
                                          ' w które spkowałeś/aś rzeczy:'}/>

                        <OddajForm2 inputsValue={inputsValue}
                                    setInputsValue={setInputsValue}
                                    inputsValueKey={inputsValue.selectBags}
                                    handleChange={handleChange}
                                    counter={counter}
                                    handleIncrease={handleIncrease}
                                    handleDecrease={handleDecrease}
                                    createSummary={createSummary}/>

                    </main>
                </>
            }

            {counter === 3 &&
                <>
                    <OddajBelt text={'Jeśli wiesz komu chcesz pomóc,' +
                        ' możesz wpisać nazwę organizacji w wyszukiwarce.' +
                        ' Możesz też filtrować organizacje po ich lokalizacji' +
                        ' bądź celu ich pomocy'}/>

                    <main className="wrapper wrapper--oddajMain">

                        <OddajFormTop step={'krok 3/4'}
                                      text={'lokalizacja:'}/>

                        <OddajForm3 inputsValue={inputsValue}
                                    setInputsValue={setInputsValue}
                                    handleChange={handleChange}
                                    counter={counter}
                                    handleIncrease={handleIncrease}
                                    handleDecrease={handleDecrease}/>

                    </main>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt text={'Podaj adres oraz termin odbioru rzeczy'}/>

                    <main className="wrapper wrapper--oddajMain">

                        <OddajFormTop step={'krok 4/4'}
                                      text={'podaj adres oraz termin ' +
                                          'odbioru rzeczy przez kuriera:'}/>

                        <OddajForm4 inputsValue={inputsValue}
                                    handleChange={handleChange}
                                    counter={counter}
                                    handleIncrease={handleIncrease}
                                    handleDecrease={handleDecrease}/>

                    </main>
                </>
            }

            {counter === 5 &&
                <>
                    <main className="wrapper wrapper--oddajMain">

                        <div className="belt__empty"></div>

                        <OddajFormTop step={' i '}
                                      text={'podsumowanie twojej darowizny'}/>

                        <OddajSummary createSummary={createSummary}
                                      inputsValue={inputsValue}
                                      counter={counter}
                                      handleIncrease={handleIncrease}
                                      handleDecrease={handleDecrease}/>

                    </main>
                </>
            }

            {counter === 6 &&
                <main className="wrapper wrapper--oddajMain">

                    <div className="belt__empty"></div>

                    <OddajFormTop step={' i '} text={''}/>

                    <OddajThanx/>
                </main>}
            <Section_5/>
            <Footer/>
        </>
    );
}
export default OddajMain;