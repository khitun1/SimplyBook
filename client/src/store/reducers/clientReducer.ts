import {clientsActionTypes, IClientsAction} from "../../types/clientsType";
import {IUserState} from "../../types/userType";

const defaultState: IUserState[] = [];

export const clientReducer = (state = defaultState, action: IClientsAction) => {
    switch(action.type) {
        case clientsActionTypes.SET_CLIENTS:
            return action.payload;
        default:
            return state;
    }
}