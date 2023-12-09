import {$authHost} from "./index";


export const createOrgApi = async(name: string, description: string, requisites: string) => {
    await $authHost.post('/org/create', {
        name, description, requisites
    });
}

export const getOrgsApi = async() => {
    const {data} = await $authHost.get('/org/getAll');
    return data.organizations;
}

export const changeReqApi = async(id: string, requisites: string) => {
    await $authHost.post('org/changeRequesites', {
        id, requisites
    })
}

export const getOrgsForChildApi = async(childId: string) => {
    const {data} = await $authHost.post('org/getForChild', {
        childId
    });
    return data.organizations;
}

