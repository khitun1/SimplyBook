import {childActionTypes, IChildrenAction, IChildState} from "../../types/childrenType";


const defaultState: IChildState[] = []

export const childrenReducer = (state = defaultState, action: IChildrenAction) => {
    switch(action.type) {
        case childActionTypes.SET_CHILDREN:
            return action.payload;
        default:
            return state;
    }
}