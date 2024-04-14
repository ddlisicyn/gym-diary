const servicesConstants = {
    reducerPath: 'auth/api',
    baseUrl: 'auth/api',
    register: '/register'
}

export interface IUser {
    login: string;
    password: string;
}

export default servicesConstants;