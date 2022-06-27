import { getItemAsync } from 'expo-secure-store';

export const getToken = async () => {
  const token = await getItemAsync('token');
  return token;
};
