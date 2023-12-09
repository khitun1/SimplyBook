import {ITeachersAction, ITeachersState, teachersActionTypes} from "../../types/teachersType";
import {Dispatch} from "react";
import {IUserState} from "../../types/userType";
import {clientsActionTypes, IClientsAction} from "../../types/clientsType";

export const setClients = (clients: IUserState[]) => {
    return (dispatch: Dispatch<IClientsAction>) => {
        dispatch({type: clientsActionTypes.SET_CLIENTS, payload: clients})
    }
}
