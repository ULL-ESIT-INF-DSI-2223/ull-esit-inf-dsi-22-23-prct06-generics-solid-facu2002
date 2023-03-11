// Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:

//     Diseñe una interfaz genérica 'Arithmeticable', que defina los siguientes métodos con los que debería contar una clase que implemente dicha interfaz genérica: 
//     add, substract, multiply, divide.
    
//     Diseñe una clase genérica 'ArithmeticableCollection' cuyo parámetro de tipo genérico 'T' se encuentre restringido a la forma definida por la interfaz 'Arithmeticable'. 
    
//     Dicha clase genérica deberá contar, al menos, con los métodos 'addArithmeticable' (añadir un elemento a la colección), 
//     'getArithmeticable' (obtener un elemento de la colección) y 'getNumberOfArithmeticables' (obtener el tamaño de la colección), 
//     además de con un array de elementos cuyo tipo sea T.
    
//     Diseñe una clase 'Complex' y otra clase 'Rational' que implementen la interfaz 'Arithmeticable'.
//     Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de las clases 'Complex' y 'Rational' y demuestre su correcto funcionamiento.
//     Trate de respetar los principios SOLID en su diseño de clases e interfaces.

// Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología TDD/BDD utilizando el framework de pruebas Mocha y la 
// librería de aserciones Chai. Genere, también, un informe de cubrimiento del código haciendo uso de Instanbul y Coveralls. Como entrega de esta tarea deberá indicar, 
// de nuevo, el enlace a dicho repositorio GitHub con los ejercicios solicitados.



/**
 * Interfaz que define los métodos que debe tener una clase que implemente la interfaz (add, substract, multiply, divide)
 */
export interface Arithmeticable<T> {
  add(op: T): T;
  substract(op: T): T;
  multiply(op: T): T;
  divide(op: T): T;
}


/**
 * Clase genérica que contiene un array de elementos de tipo T que implementan la interfaz Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   * Constructor de la clase
   * @param coleccion Array de elementos de tipo T que implementan la interfaz Arithmeticable
   */
  constructor (private coleccion: T[]) {}

  /**
   * Método que añade un elemento de tipo T a la colección  
   * @param elemento Elemento de tipo T que se va a agregar a la colección
   * @returns elemento de tipo T que se ha agregado a la colección
   */
  addArithmeticable(elemento: T) {
    this.coleccion.push(elemento);
    return elemento; 
  }

  /**
   * Método que obtiene un elemento de la colección dado un índice
   * @param indice Indice del elemento que se quiere obtener de la colección
   * @returns elemento de tipo T que se encuentra en la posición indicada por el parámetro indice
   */
  getArithmeticable(indice: number): T {
    return this.coleccion[indice];
  }

  /**
   * Método que obtiene el número de elementos de tipo T que contiene la colección
   * @returns número de elementos de tipo T que contiene la colección
   */
  getNumberOfArithmeticables(): number {
    return this.coleccion.length;
  }
}