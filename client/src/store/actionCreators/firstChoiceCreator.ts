import {Dispatch} from "react";
import {IChoiceAction} from "../reducers/firstChoiceReducer";


export const changeChoice = (choice: string) => {
    return async(dispatch: Dispatch<IChoiceAction>) => {
        dispatch({type: "change", payload: choice})
    }
}