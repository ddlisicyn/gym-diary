const servicesConstants = {
    reducerPath: 'auth/api',
    baseUrl: 'auth/api',
    register: '/register'
}

export interface IUser {
    email: string;
    password: string;
}

export default servicesConstants;