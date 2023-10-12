import {IUserAction, IUserState} from "../../types/user";


const defaultState : IUserState = {
    name: "",
    role: 1,
    login: "",
}

export const userReducer = (state = defaultState, action: IUserAction) : IUserState => {
    switch(action.type) {
        case "SET_USER":
            return action.payload;
        default:
            return state;
    }
}