import {useState} from "react";

const useFetchPOST = (url: any, data: any) => {

    const [loadingPOST, setPOSTLoading] = useState(false)
    const [errorPOST, setPOSTError] = useState<string | null>(null)

    const createPOST = () => {
        setPOSTLoading(true)
        setPOSTError(null)

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(data),
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
                if (data) {
                    setPOSTError('Informacje zostały wysłane')
                    setPOSTLoading(false)
                }
            })
            .catch(err => {
                    setPOSTError(err.message === 'Failed to fetch' ?
                        'Brak połączenia z serwerem':
                        err.message)
                    setPOSTLoading(false)
                }
            )
    }
    return {loadingPOST, errorPOST, createPOST}

}

export default useFetchPOST