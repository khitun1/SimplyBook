export interface IOrgState {
    _id: string,
    name: string,
    description: string,
    requisites: string,
}

export enum orgActionTypes {
    SET_ORGS = 'SET_ORGS'
}

interface setOrgs {
    type: orgActionTypes.SET_ORGS,
    payload: IOrgState[],
}

export type IOrgAction = setOrgs;