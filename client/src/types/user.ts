export interface IUserState {
    name: string,
    role: null | number,
    login: string,
    balance? : number,
}

export enum userActionTypes {
    SET_USER = 'SET_USER',
}

interface setUser {
    type: userActionTypes.SET_USER,
    payload: IUserState,
}

export type IUserAction = setUser;






