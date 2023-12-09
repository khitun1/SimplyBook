import {ITeachersAction, teachersActionTypes} from "../../types/teachersType";


const defaultState: ITeachersAction[] = []

export const teachersReducer = (state = defaultState, action: ITeachersAction) => {
    switch(action.type) {
        case teachersActionTypes.SET_TEACHERS:
            return action.payload;
        default:
            return state;
    }
}