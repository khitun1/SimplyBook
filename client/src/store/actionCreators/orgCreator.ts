import {Dispatch} from "redux";
import {IOrgAction, IOrgState, orgActionTypes} from "../../types/organizationsType";


export const setOrgs = (orgs: IOrgState[]) => {
    return (dispatch: Dispatch<IOrgAction>) => {
        dispatch({type: orgActionTypes.SET_ORGS, payload: orgs});
    }
}