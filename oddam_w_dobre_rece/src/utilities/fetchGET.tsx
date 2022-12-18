import {ModelAllData} from "../data/modelsTS";

    const fetchGet = (url: string):Promise<ModelAllData> => {
        return fetch( url )
            .then(resp => resp.json())
    }

export default fetchGet