import {IOrgAction, IOrgState, orgActionTypes} from "../../types/organizationsType";

const defaultState: IOrgState[] = [];


export const organizationReducer = (state = defaultState, action: IOrgAction) => {
    switch (action.type) {
        case orgActionTypes.SET_ORGS:
            return action.payload;
        default:
            return state;
    }
}