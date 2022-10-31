import React, {SetStateAction} from "react"
import {IInputValue} from "../Home/Section_5/Section_5_Form";

export const URL_FUNDATIONS = 'https://my-json-server.typicode.com/Krzysztofe/oddam_api/fundations'
export const URL_NGO = 'https://my-json-server.typicode.com/Krzysztofe/oddam_api/ngo'
export const URL_COLLECTIONS = 'https://my-json-server.typicode.com/Krzysztofe/oddam_api/collections'

const URL_USERS =
    'https://authentication-cl-default-rtdb.europe-west1.firebasedatabase.app/users.json'



type setOrganizationsTypes = {
    types: { id: number,
        type: string,
        name: string,
        goals: string,
        stuff: string }[]
}

export const jsonGetOrganizations =
    (setOrganisations: React.Dispatch<React.SetStateAction<setOrganizationsTypes['types']>>,
     setLoading: React.Dispatch<SetStateAction<boolean>>,
     setError: React.Dispatch<React.SetStateAction<string | null>>,
     URL: string): void => {

        setLoading(true)
        setError(null)

        fetch(URL)
            .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    throw Error('Brak dostępu do zasobu')
                }
            )
            .then(data => {
                    setOrganisations(data)
                    setLoading(false)
                }
            )
            .catch(err =>
                setError(err.message === 'Failed to fetch' ?
                    'Brak połączenia z serwerem' :
                    err.message))
    }


export const postUser = (InputValue: IInputValue,
                         setFetchErrors: React.Dispatch<React.SetStateAction<string | null>>)
    : void => {

    setFetchErrors(null)

    fetch(URL_USERS,
        {
            method: 'POST',
            body: JSON.stringify(InputValue),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
        .then(resp => {
          return resp.json()
            if (resp.ok) {
                return resp.json()
            }
            throw Error('Nie znaleziono metody zapisu')
        }
        )
        // .then(data => {
        //     if(data){
        //         setFetchErrors('Informacje wysłane')
        //     }
        // })
        .catch(err => setFetchErrors(err.message === 'Failed to fetch' ?
            'Brak połączenia z serwerem' :
            err.message))
}