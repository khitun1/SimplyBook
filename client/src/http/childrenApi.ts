import {$authHost} from "./index";


export const createChildApi = async(name: string, birthday: string,
                                    groupId: string, parentId: string) => {
    await $authHost.post('child/create', {
        name, birthday, parentId, groupId
    })
}

export const getChildrenApi = async() => {
    const groupId = localStorage.getItem('currentGroup');
    const {data} = await $authHost.post('child/getAll', {
        groupId
    });
    return data.children;
}

export const delChildApi = async(childId: string) => {
    await $authHost.post('child/exclude', {
        childId
    })
}

export const changeGroupForChildApi = async() => {
    const groupId = localStorage.getItem('currentGroup');
    const childId = localStorage.getItem('currentChild');
    await $authHost.post('child/changeGroup', {
        groupId, childId
    })
}

export const setVisitApi = async(mark: string, childId: string, date: string) => {
    // console.log(mark, childId, date)
    await $authHost.post('visit/setVisit', {
        mark, childId, date
    });
}

// export const getVisitsApi = async(month: number, year: number, childId: string) => {
//     console.log(month, year, childId);
//     return true
// }

export const getChildrenForParentApi = async() => {
    const {data} = await $authHost.get('child/getForParent');
    return data.children;
}

export const getScheduleForChildApi = async (childId: null | string, month: number, year: number) => {
    const {data} = await $authHost.post('schedule/getForChild', {
        childId, month, year
    });
    return data.schedule;
}