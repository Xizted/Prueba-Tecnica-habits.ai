import { getItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';

interface Order {
  Crust: string;
  Flavor: string;
  Order_ID: number;
  Size: string;
  Table_No: number;
  Timestamp: string;
}

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getItemAsync('token').then((token) => setToken(token));
  }, []);

  return (
    <AppContext.Provider value={{ token, setToken, orders, setOrders }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
