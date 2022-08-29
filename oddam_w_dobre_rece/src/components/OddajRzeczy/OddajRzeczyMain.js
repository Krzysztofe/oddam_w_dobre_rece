import React, {useState} from 'react';
import {useEffect} from "react";

import OddajRzeczyBags from "./OddajRzeczyBags";
import OddajRzeczyLocalization from "./OddajRzeczyLocalisation";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../FireBaseConfig";
import OddajRzeczyStuff from "./OddajRzeczyStuff";
import OddajRzeczyThanx from "./OddajRzeczyThanx";
import OddajRzeczyAdress from "./OddajRzeczyAdress";
import OddajRzeczySummary from "./OddajRzeczySummary";


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
        <div>

            <h1 style={{marginTop: 150}}></h1>

            {counter === 1 &&
                <OddajRzeczyStuff inputsValue={inputsValue}
                                  handleChange={handleChange}
                                  counter={counter}
                                  handleIncrease={handleIncrease}
                                  handleDecrease={handleDecrease}
                />}

            {counter === 2 &&
                <OddajRzeczyBags
                    inputsValue={inputsValue}
                    handleChange={handleChange}
                    counter={counter}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                />}

            {counter === 3 &&
                <OddajRzeczyLocalization
                    inputsValue={inputsValue}
                    handleChange={handleChange}
                    counter={counter}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                />}

            {counter === 4 &&
                <OddajRzeczyAdress
                    inputsValue={inputsValue}
                    handleChange={handleChange}
                    counter={counter}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                />}

            {counter === 5 &&
                <OddajRzeczySummary
                    createSummary={createSummary}
                    inputsValue={inputsValue}
                    counter={counter}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                />}

            {counter === 6 &&
                <OddajRzeczyThanx/>}
        </div>
    );
}
export default OddajRzeczyMain;