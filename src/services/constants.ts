export const servicesConstants = {
  reducerPath: 'auth/api',
  baseUrl: 'auth/api',
  register: '/register',
  me: '/me',
};

export interface IUser {
  email: string;
  password: string;
}

export interface IMe {
  img: string;
  login: string;
  name: string;
}
