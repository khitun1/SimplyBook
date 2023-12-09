import {IUserState} from "./userType";


export enum clientsActionTypes {
    SET_CLIENTS = 'SET_CLIENTS',
}

interface setClients {
    type: clientsActionTypes.SET_CLIENTS,
    payload: IUserState[],
}



export type IClientsAction = setClients;
