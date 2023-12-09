import {Dispatch} from "redux";
import {groupActionsTypes, IGroupAction, IGroupState} from "../../types/groupsType";


export const setGroups = (groups: IGroupState[]) => {
    return (dispatch: Dispatch<IGroupAction>) => {
        dispatch({type: groupActionsTypes.SET_GROUPS, payload: groups});
    }
}