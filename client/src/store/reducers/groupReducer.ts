import {groupActionsTypes, IGroupAction, IGroupState} from "../../types/groupsType";

const defaultState: IGroupState[] = [];

export const groupReducer = (state = defaultState, action: IGroupAction) => {
    switch(action.type) {
        case groupActionsTypes.SET_GROUPS:
            return action.payload;
        default:
            return state;
    }
}