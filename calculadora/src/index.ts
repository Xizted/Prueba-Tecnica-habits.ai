import infixtopostfix from './helper/infixtopostfix';
import rpn from './helper/rpn';

export const calculate = (infix: string): number | undefined => {
  //Eliminar caracteres innecesarios
  infix = infix.replace(/[^0-9%^*\/()\-+.]/g, '');

  // Limitar la longitud del string a 30 
  if (infix.length > 30) {
    console.log('No more than 30 characters can be entered');
    return;
  }
  // Convertir la operacion de infija a postfija mediante el Algoritmo de shurting yard
  const prefix = infixtopostfix(infix);
  // Resolver operacion postfija mediante la notacion por polaca inversa
  const result = rpn(prefix);

  return result;
};
