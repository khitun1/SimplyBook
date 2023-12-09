import {IUserAction, IUserState, userActionTypes} from "../../types/userType";


const defaultState : IUserState = {
    name: "",
    role: null,
    login: "",
    id: null,
}

export const userReducer = (state = defaultState, action: IUserAction) : IUserState => {
    switch(action.type) {
        case userActionTypes.SET_USER:
            return action.payload;
        default:
            return state;
    }
}