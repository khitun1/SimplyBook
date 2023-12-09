export interface ITeachersState {
    name: string,
    _id: string | null,
    role: null | string,
    login: string,
    balance? : number,
    users: any[],
}

export enum teachersActionTypes {
    SET_TEACHERS = 'SET_TEACHERS',
}

interface setTeachers {
    type: teachersActionTypes.SET_TEACHERS,
    payload: ITeachersState[],
}



export type ITeachersAction = setTeachers;
