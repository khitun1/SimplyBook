import {$authHost} from "./index";


export const payApi = async(sum: number, childId: string, date: string, status = 'Проведен') => {
    await $authHost.post('payment/setPayment', {
        sum, childId, date, status
    })
}

export const getPaymentsForClientApi = async(childId: string) => {
    const {data} = await $authHost.post('payment/getPayments', {
        childId
    })
    return data.payments;
}

export const getPaymentsForAdminApi = async(orgId: string) => {
    const {data} = await $authHost.post('payment/getPayments', {
        orgId
    })
    return data.payments;
}