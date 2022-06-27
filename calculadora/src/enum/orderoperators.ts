interface OrderOperatorsI {
  [key: string]: number;
}

const OrderOperators: OrderOperatorsI = {
  '-': 1,
  '+': 1,
  '/': 2,
  '*': 2,
  '^': 3,
};

export default OrderOperators;
