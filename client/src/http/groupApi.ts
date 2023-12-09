import {$authHost} from "./index";


export const delGroupApi = async () => {

}

export const createGroupApi = async(name: string, orgId: string) => {
    const {data} = await $authHost.post('group/create', {
        name, orgId
    })
    return data.id;
}

export const setScheduleApi = async(groupId: string, schedule: object, month: number) => {
    await $authHost.post('schedule/setSchedule', {
        groupId, schedule, month
    })
};

export const getScheduleApi = async (groupId: null | string, month: number, year: number) => {
    const {data} = await $authHost.post('schedule/getSchedule', {
        groupId, month, year
    });
    return data.schedule;
}


export const getGroupsApi = async() => {
    const id = localStorage.getItem('currentOrg');
    const {data} = await $authHost.post('group/getAll', {
        id
    });
    return data.groups;
}

export const changeGroupsApi = async(teacherId: string, groupId: string, action: string) => {
    await $authHost.post('group/changeTeachers', {
        teacherId, groupId, action
    })
}

export const getTeacherGroups = async(id: string) => {
    const {data} = await $authHost.post('group/getAllForTeacher', {
        id
    })
}

export const setPlanApi = async(month: number, sum: number, groupId: string | null, orgId: string) => {
    if (groupId === 'Для всех групп') {
        groupId = null;
    }
    await $authHost.post('plan/setPlan', {
        month, sum, groupId, orgId,
    })
}

export const getPlanApi = async(month: number, groupId: string | null) => {
    if (groupId === 'Для всех групп') {
        groupId = null;
    }
        const {data} = await $authHost.post('plan/getPlan', {
        month, groupId
    });
    if (data.plan) {
        return data.plan.sum;
    }
    return undefined;
}

export const getGroupsForTeacherApi = async() => {
    const {data} = await $authHost.get('group/getAllForTeacher');
    return data.groups;
}