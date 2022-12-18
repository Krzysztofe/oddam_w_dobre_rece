export interface ModelOrganization {
    "id": number,
    "type": string,
    "name": string,
    "goals": string,
    "stuff": string
}

export interface Modelsummary {
    "id": number,
    "number": string,
    "activity": string,
    "description": string
}

export interface ModelAllData{
    collections:ModelOrganization[]
    fundations: ModelOrganization[]
    ngo: ModelOrganization[]
    summary: Modelsummary[]
}