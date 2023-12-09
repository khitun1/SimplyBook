export interface IGroupState {
    _id: null | string,
    name: string,
    teachersId: string,
}

export enum groupActionsTypes {
    SET_GROUPS= 'SET_GROUPS',
}

interface setGroups {
    type: groupActionsTypes.SET_GROUPS,
    payload: IGroupState[],
}

export type IGroupAction = setGroups;