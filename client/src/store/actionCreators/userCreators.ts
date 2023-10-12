import {Dispatch} from "react";
import {IUserAction, IUserState, userActionTypes} from "../../types/user";


export const setUser = () => {
    return (dispatch: Dispatch<IUserAction>) => {
        const user: IUserState = {
            name: '123',
            role: 1,
            login: '456',
        }
        dispatch({type: userActionTypes.SET_USER,payload: user})
    }
}

export const exit = () => {
    return (dispatch: Dispatch<IUserAction>) => {
        const user: IUserState = {
            name: '123',
            role: null,
            login: '456',
        }
        dispatch({type: userActionTypes.SET_USER,payload: user})
    }
}