import OrderOperators from '../enum/orderoperators';
import isNumber from '../utils/isNumber';
import isOperator from '../utils/isOperator';

/**
 *  - Función para convertir una operación infija a postfija siguiendo el algoritmo de Shurting Yard
 *  - Esta función espera una operación infija
 */
const infixtoprofix = (input: string) => {
  //array para almacenar los números y signos que cumpla ciertas condiciones
  const queue: string[] = [];
  //array para almacenar los signos
  const stack: string[] = [];

  for (const [i, token] of input.split('').entries()) {
    /*
     * Caso 1: Si el token es un paréntesis de apertura, entonces se insertara directamente a la pila
     */
    if (token === '(') {
      stack.push(token);
      continue;
    }
    /**
     * Caso 2: Si el token es un paréntesis de cierre, entonces se extraera los últimos elementos de
     * la pila hasta el paréntesis de apertura correspondiente y se insertaran en la cola, eliminando
     * los paréntesis
     */
    if (token === ')') {
      while (stack[stack.length - 1] !== '(') {
        queue.push(stack.pop()!);
      }
      stack.pop();
      continue;
    }

    /**
     * Caso 3: Si el token es un número, se insertara directamente a la cola.
     */

    if (isNumber(token)) {
      const number = isOperator(input[i + 1]) ? token + ' ' : token;
      queue.push(number);
      continue;
    }

    /**
     * Caso 4: Si el token es un operador, se compara la presedencia del operador con la presedencia
     * del ultimo operador almacenado en la pila.
     *
     * En el caso de que sea menor o de igual presedencia, se extraera el último operador de la pila
     * y se almacenara en la cola, luego se almacenara el núevo operador en la pila.
     *
     * caso contrario, se almacenara directamente en la pila
     */

    if (isOperator(token)) {
      const orderOperator = OrderOperators[token];
      let lastOperatorStack = stack[stack.length - 1];
      if (lastOperatorStack === undefined) lastOperatorStack = '';
      let orderOperatorStack = OrderOperators[lastOperatorStack.trim()];

      while (orderOperator <= orderOperatorStack) {
        const operatorStack = stack.pop()!;
        orderOperatorStack = OrderOperators[stack[stack.length - 1]];
        queue.push(operatorStack);
      }

      const operator = ' ' + token + ' ';

      stack.push(operator);

      continue;
    }
  }

  return [...queue, ...stack.reverse()].join('');
};

export default infixtoprofix;
