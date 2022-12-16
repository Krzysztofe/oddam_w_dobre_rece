import {ModelOrganizations} from "../pages/home/section_4/modelOrganizations";


const useFetchGET = (url: string) => {

    const fetchGet = ():Promise<ModelOrganizations> => {
        return fetch( url )
            .then(resp => resp.json())
    }
    return {fetchGet}

}

export default useFetchGET