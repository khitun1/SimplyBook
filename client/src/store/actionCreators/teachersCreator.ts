import {Dispatch} from "react";
import {ITeachersAction, ITeachersState, teachersActionTypes} from "../../types/teachersType";




export const setTeachers = (teachers: ITeachersState[]) => {
    return (dispatch: Dispatch<ITeachersAction>) => {
        dispatch({type: teachersActionTypes.SET_TEACHERS, payload: teachers})
    }
}
