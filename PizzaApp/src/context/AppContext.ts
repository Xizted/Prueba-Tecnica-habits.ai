import { createContext } from 'react';

interface Order {
  Crust: string;
  Flavor: string;
  Order_ID: number;
  Size: string;
  Table_No: number;
  Timestamp: string;
}

interface ContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}
const AppContext = createContext({} as ContextProps);
export default AppContext;
