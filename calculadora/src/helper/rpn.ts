import isNumber from '../utils/isNumber';
import Operators from './operators';

/**
 *  - Función para resolver una operación postfija siguiendo la notación por polaca inversa
 *  - Esta función espera una operación postfija
 */
const rpn = (prefix: string): number => {
  // Array para almacenar los operandos
  const stack = [];
  // String de la operación convertida en Array
  const prefixArr = prefix.split(' ').filter((p) => p !== '');

  for (let i = 0; i < prefixArr.length; i++) {
    /**
     * Si el elemento del array es un número, se inserta directamente a la pila
     */

    if (isNumber(prefixArr[i])) {
      stack.push(prefixArr[i]);
    } else {
      /**
       * Si el elemento del array es un operador, se extraen de la pila los dos últimos operandos para realizar
       * la operación
       */

      let b = stack.pop()!;
      let a = stack.pop()!;
      let operator = prefixArr[i];

      const result = Operators[operator](
        parseFloat(a.toString()),
        parseFloat(b.toString())
      );
      stack.push(result);
    }
  }
  return parseFloat(stack[0].toString());
};

export default rpn;
