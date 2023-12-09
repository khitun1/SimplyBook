export interface IChildState {
    name: string,
    birthday: string
    _id: string | null,
    balance?: number,
    groupId: string,
    visits?: any[],
}

export enum childActionTypes {
    SET_CHILDREN = 'SET_CHILDREN',
}

interface setChildren {
    type: childActionTypes.SET_CHILDREN,
    payload: IChildState[],
}



export type IChildrenAction = setChildren;

