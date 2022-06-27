# Ejercicio 1: Lógica Matematica

## Tabla de Contenido

- [Descripción de la Solución](#descripción_de_la_solución)
- [Algoritmo](#algoritmo)

## Descripción de la Solución

Para la resolución de  este ejercicio, se utilizo el algoritmo Shurting Yard para convertir la operación postfija en una operación infija, de esta manera es más sencillo obtener el resultado mediante la notación por polaca inversa respetando la jerarquia de las operaciones.

## Algoritmo

#### Pasos para convertir una operación infija a postfija mediante el algoritmo Shurting Yard:

1. Inicializamos dos array vacios que simularan ser la pila y la cola. (para este algoritmo se necesitan de esta dos estructura)

2. Recorremos el string de izquierda a derecha, para cada token del string, pueden surgir cuatros casos:

    a) Si el token es un paréntesis de apertura, entonces se insertara directamente a la pila
    
    b) Si el token es un paréntesis de cierre, entonces se extraera los últimos elementos de la pila hasta el paréntesis de apertura correspondiente y se insertaran en la cola, eliminando los paréntesis
    
    c) Si el token es un número, se insertara directamente a la cola
    
    d) Si el token es un operador, se compara la presedencia del operador con la presedencia del ultimo operador almacenado en la pila. En el caso de que sea menor o de igual presedencia, se extraera el último operador de la pila y se almacenara en la cola, luego se almacenara el núevo operador en la pila. caso contrario, se almacenara directamente en la pila 

3. Se crea un núevo array combinando la cola y la pila de forma infertida.

### Pasos para resolver una operación postfija mediante la notación por polaca inversa

1. Convertir el string de la operación en un array, separando los operandos y signos.
2. Inicializar Array vacio que simulara ser la pila
3. Recorremos el array de izquierda a derecha, para cada elemento del array, pueden surgir dos casos:
    
    a) Si el elemento del es un operando, se inserta directamente a la pila
    
    b) Si el elemento es un operador, se extrae los dos úlimos operandos de la pila, y se realiza la operación, luego se almacena el resultado en la pila.
4. Retornamos el resultado