import {Dispatch} from "redux";
import {childActionTypes, IChildrenAction, IChildState} from "../../types/childrenType";


export const setChildren = (children: IChildState[]) => {
    return (dispatch: Dispatch<IChildrenAction>) => {
        dispatch({type: childActionTypes.SET_CHILDREN, payload: children});
    }
}