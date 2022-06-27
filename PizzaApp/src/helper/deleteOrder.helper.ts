interface Order {
  Order_ID: number;
  Crust: string;
  Flavor: string;
  Size: string;
  Table_No: number;
  Timestamp: string;
}

const deleteOrderHelper = (orders: Order[], Order_ID: number) => {
  return orders.filter((order) => order.Order_ID !== Order_ID);
};

export default deleteOrderHelper;
