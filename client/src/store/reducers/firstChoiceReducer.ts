

interface IChoiceState {
    choice: null | string,
}

const defaultState: IChoiceState = {
    choice: null,
}

export interface IChoiceAction {
    type: string,
    payload: string,
}


export const firstChoiceReducer = (state = defaultState, action: IChoiceAction): IChoiceState => {
    return {choice: action.payload};
}