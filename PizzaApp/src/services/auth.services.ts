import api from './api';

interface LoginValues {
  username: string;
  password: string;
}


export default async (values: LoginValues) => await api.post('/auth', values);
