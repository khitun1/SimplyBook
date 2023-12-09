export interface IPaymentType {
    date: string,
    sum: number,
    childId: string,
    status: string,
    name?: string,
}

export enum paymentActionType {
    SET_PAYMENT = 'SET_PAYMENT',
}

interface setPayment {
    type: paymentActionType.SET_PAYMENT,
    payload: IPaymentType[],
}



export type IPaymentAction = setPayment;