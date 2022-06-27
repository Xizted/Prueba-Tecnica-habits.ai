import OrderOperators from '../enum/orderoperators';

const isOperator = (token: string) =>
  [...Object.keys(OrderOperators)].includes(token);

export default isOperator;
