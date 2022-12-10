import React, {SetStateAction} from "react"
import {IInputValue} from "../Home/section_5/Section_5_Form";

const URL_USERS =
    'https://authentication-cl-default-rtdb.europe-west1.firebasedatabase.app/users.json'




export const fetchPostUser = (InputValue: IInputValue,
                         setFetchErrors: React.Dispatch<React.SetStateAction<string | null>>)
    : void => {

    setFetchErrors('Wysyła')

    fetch(URL_USERS,
        {
            method: 'POST',
            body: JSON.stringify(InputValue),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw Error('Nie znaleziono metody zapisu')
        })
        .then(data => {
            if(data){
                setFetchErrors('Informacje zostały wysłane')
            }
        })
        .catch(err => setFetchErrors(err.message === 'Failed to fetch' ?
            'Brak połączenia z serwerem' :
            err.message))
}