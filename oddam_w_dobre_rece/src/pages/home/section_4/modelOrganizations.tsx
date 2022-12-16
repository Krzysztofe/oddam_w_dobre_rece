interface ModelOrganization {
    "id": number,
    "type": string,
    "name": string,
    "goals": string,
    "stuff": string
}

export interface ModelOrganizations{
    collections:ModelOrganization[]
    fundations: ModelOrganization[]
    ngo: ModelOrganization[]
}