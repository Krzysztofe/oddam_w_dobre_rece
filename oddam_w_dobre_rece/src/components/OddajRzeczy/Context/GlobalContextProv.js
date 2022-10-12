import React, {createContext, useState} from 'react';
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../FireBaseConfig";
import {useAuthState} from "react-firebase-hooks/auth";


export const GlobalContext = createContext()

const GlobalContextProv = ({children}) => {

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

    const [counter, setCounter] = useState(1)

    const handleIncrease = () => {
        if (counter > 0 && counter < 6)
            setCounter(prevState => prevState + 1)
    }

    const handleDecrease = () => {
        if (counter > -1 && counter < 6)
            setCounter(prevState => prevState - 1)
    }

    const [user, loading, error] = useAuthState(auth);
    const summaryReference = collection(db, 'summary')

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
        <GlobalContext.Provider value={{
            inputsValue,
            setInputsValue,
            counter,
            handleChange,
            handleIncrease,
            handleDecrease,
            createSummary
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProv;