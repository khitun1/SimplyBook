import {Dispatch} from "react";
import {IPaymentAction, IPaymentType, paymentActionType} from "../../types/paymentType";

export const setPayments = (payments: IPaymentType[]) => {
    return (dispatch: Dispatch<IPaymentAction>) => {
        dispatch({type: paymentActionType.SET_PAYMENT, payload: payments})
    }
}