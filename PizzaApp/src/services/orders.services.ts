import { getToken } from '../utils/getToken';
import api from './api';

interface AddOrderValues {
  Crust: string;
  Flavor: string;
  Size: string;
  Table_No: number;
}

export const getOrders = async () => {
  const { data } = await api.get('/orders');

  return data;
};

export const addOrder = async (values: AddOrderValues) => {
  const token = await getToken();
  if (!token) return;

  const { data } = await api.post('/orders', values, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const deleteOrder = async (Order_ID: number) => {
  await api.delete(`/orders/${Order_ID}`);
    
  
}
