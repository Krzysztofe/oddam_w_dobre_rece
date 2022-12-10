import {useEffect, useState} from "react";


const useFetchGET = (url: any) => {
    const [data, setData] = useState<any | null>(null)
    const [loadingGET, setGETLoading] = useState(false)
    const [errorGET, setGETError] = useState<string | null>(null)

    useEffect(() => {

        setGETLoading(true)
        setGETError(null)

        fetch(url)
            .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    throw Error('Brak dostępu do zasobu')
                }
            )
            .then(data => {
                    setData(data)
                    setGETLoading(false)
                }
            )
            .catch(err => {
                    setGETError(err.message === 'Failed to fetch' ?
                        'Brak połączenia z serwerem' :
                        err.message)
                    setGETLoading(false)
                }
            )
    }, [url])

    return {loadingGET, errorGET, data}

}

export default useFetchGET