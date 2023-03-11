/**
 * Clase myArray
 */
export class myArray<T> {
  /**
   * Constructor de la clase myArray
   * @param array Array de tipo T
   */
  constructor(private array: T[]) {}
  
  /**
   * Getter del array
   */
  get Array() {
    return this.array;
  }
  
  /**
   * Método que devuelve la longitud del array
   * @returns número de elementos del array
   */
  myLength() {
    let contador = 0;
    while(this.array[contador] !== undefined) {
      contador++;
    }
    return contador;
  }

  /**
   * Método que inserta un elemento en el array
   * @param array lista en la que se va a insertar el elemento
   * @param elementos elementos que se van a insertar
   * @returns posición en la que se insertó
   */
  myPush(array: T[], ...elementos: T[]): number {
    let contador = 0;
    for (let i = 0; elementos[i] !== undefined; i++) {
      array[array.length] = elementos[i];
      contador++;
    }
    return contador;
  }

  /**
   * Método que inserta una lista en la lista del invocador
   * @param elemento lista que se va a insertar
   * @returns el objeto con la lista ya insertada
   */
  myAppend(elemento: myArray<T>): myArray<T> {
    for (let i = 0; i < elemento.myLength(); i++) {
      this.myPush(this.array, elemento.Array[i]);
    }
    return this;
  }

  /**
   * Método que concatena varias listas
   * @param elementos lista de listas que se van a concatenar
   * @returns lista concatenada
   */
  myConcatenate(...elementos: myArray<T>[]): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; elementos[i] !== undefined; i++) {
      for (let j = 0; j < elementos[i].myLength(); j++) {
        resultado.myPush(resultado.array, elementos[i].Array[j]);
      }
    }
    return resultado;
  }

  /**
   * Método que dada una lista y una condición, devuelve la lista con los elemento que satisfacen la condición 
   * @param array lista de la que se van a filtrar los elementos
   * @param callback condición que deben cumplir los elementos
   * @returns lista con los elementos que cumplen la condición
   */
  myFilter(array: myArray<T>, callback: (x: T) => boolean): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      if (callback(array.Array[i])) {
        this.myPush(resultado.Array, array.Array[i]);
      }
    }
    return resultado;
  }

  /**
   * Método que dada una lista y una función, devuelve la lista con los elementos transformados por la función
   * @param array lista de la que se van a transformar los elementos
   * @param callback función que se va a aplicar a los elementos
   * @returns lista con los elementos transformados
   */
  myMap(array: myArray<T>, callback: (x: T) => T): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      this.myPush(resultado.Array, callback(array.Array[i]));
    }
    return resultado;
  }

  /**
   * Método que dada una lista y una función, devuelve el resultado de aplicar la función a los elementos de la lista
   * @param array lista de la que se van a aplicar la función
   * @param callback función que se va a aplicar a los elementos
   * @returns elemento de tipo T
   */
  myReduce(array: myArray<T>, callback: (x: T, y: T) => T): T {
    let resultado = array.Array[0];
    for (let i = 1; i < array.myLength(); i++) {
      resultado = callback(resultado, array.Array[i]);
    }
    return resultado;
  }
  
  /**
   * Método que dada una lista, devuelve la lista invertida
   * @param array lista que se va a invertir
   * @returns lista invertida
   */
  myReverse(array: myArray<T>): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = array.myLength() - 1; i >= 0; i--) {
      this.myPush(resultado.Array, array.Array[i]);
    }
    return resultado;
  }

  /**
   * Método que dada una lista y una función, aplica la función a cada elemento de la lista
   * @param array lista a la que se va a aplicar la función
   * @param callback función que se va a aplicar a los elementos
   */
  myForEach(array: myArray<T>, callback: (x: T) => void): void {
    for (let i = 0; i < array.myLength(); i++) {
      callback(array.Array[i]);
    }
  }

  // myPrint() {
  //   console.log(this.array);
  // }
}