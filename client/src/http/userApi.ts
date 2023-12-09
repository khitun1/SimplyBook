import {$authHost, $host} from "./index";


export const signUpApi = async(name: string, login: string, password: string) => {
    const {data} = await $host.post('/user/signUp', {
        name, login, password, role: 'Admin',
    });
    if (!data.token) {
        return
    }
    localStorage.setItem('token', data.token);
}

export const signInApi = async(login: string, password: string) => {
    const {data} = await $host.post('/user/login', {
        login, password,
    })
    if (!data.token) {
        return
    }
    localStorage.setItem('token', data.token);
    return '/' + data.role.toLowerCase();
}

export const auth = async() => {
    const {data} = await $authHost.get('user/auth');
    if (!data.token) {
        return
    }
    localStorage.setItem('token', data.token);
}

export const createUserApi = async(name: string, login: string,
                                   password: string, role: string, orgId: string) => {
    await $authHost.post('user/create', {
        name, login, password, role, orgId
    })
}

export const getTeachersApi = async(orgId: string) => {
    const {data} = await $authHost.post('user/getAll', {
        orgId
    })
    return data.teachers;
}

export const delTeacherApi = async(id: string, orgId: string) => {
    await $authHost.post('user/exclude', {
        id, orgId
    });
}

export const setPeriodApi = async() => {
    let month = new Date().getMonth() + 2;
    if (month === 13) {
        month = 1;
    }
    await $authHost.post('period/create', {
        month,
    })
}


export const getClientsApi = async() => {
    const orgId = localStorage.getItem('currentOrg');
    const {data} = await $authHost.post('user/getClients', {
        orgId
    })
    return data.clients;
}

