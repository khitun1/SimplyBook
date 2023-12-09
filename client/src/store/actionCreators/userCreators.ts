import {Dispatch} from "react";
import {IUserAction, IUserState, userActionTypes} from "../../types/userType";
import {jwtDecode} from "jwt-decode";


export const setUser = () => {
    return (dispatch: Dispatch<IUserAction>) => {
        let token = localStorage.getItem('token');
        // @ts-ignore
        const user: IUserState = jwtDecode(token);
        dispatch({type: userActionTypes.SET_USER,payload: user})
    }
}


export const exit = () => {
    return (dispatch: Dispatch<IUserAction>) => {
        localStorage.removeItem('token')
        const user: IUserState = {
            name: '',
            role: null,
            login: '',
            id: '',
        }
        dispatch({type: userActionTypes.SET_USER,payload: user})
    }
}