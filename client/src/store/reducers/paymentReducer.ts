import {IPaymentAction, IPaymentType, paymentActionType} from "../../types/paymentType";

const defaultState: IPaymentType[] = []

export const paymentReducer = (state = defaultState, action: IPaymentAction) => {
    switch(action.type) {
        case paymentActionType.SET_PAYMENT:
            return action.payload;
        default:
            return state;
    }
}