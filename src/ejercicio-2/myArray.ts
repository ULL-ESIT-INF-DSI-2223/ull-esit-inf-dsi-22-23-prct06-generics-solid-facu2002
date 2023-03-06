
export class myArray<T> {
  constructor(private array: T[]) {}

  private get Array() {
    return this.array;
  }
  
  myLength() {
    let contador = 0;
    while(this.array[contador] !== undefined) {
      contador++;
    }
    return contador;
  }

  myPush(array: T[], ...elementos: T[]): number {
    let contador = 0;
    for (let i = 0; i < elementos.length; i++) {
      array[array.length] = elementos[i];
      contador++;
    }
    return contador;
  }

  myAppend(elemento: myArray<T>) {
    for (let i = 0; i < elemento.myLength(); i++) {
      this.myPush(this.array, elemento.Array[i]);
    }
  }

  myConcatenate(...elementos: myArray<T>[]): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < elementos.length; i++) {
      for (let j = 0; j < elementos[i].myLength(); j++) {
        resultado.myPush(resultado.array, elementos[i].Array[j]);
      }
    }
    return resultado;
  }

  myFilter(array: myArray<T>, callback: (x: T) => boolean): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      if (callback(array.Array[i])) {
        this.myPush(resultado.Array, array.Array[i]);
      }
    }
    return resultado;
  }

  myMap(array: myArray<T>, callback: (x: T) => T): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      this.myPush(resultado.Array, callback(array.Array[i]));
    }
    return resultado;
  }

  myReduce(array: myArray<T>, callback: (x: T, y: T) => T): T {
    let resultado = array.Array[0];
    for (let i = 1; i < array.myLength(); i++) {
      resultado = callback(resultado, array.Array[i]);
    }
    return resultado;
  }
  
  myReverse(array: myArray<T>): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = array.myLength() - 1; i >= 0; i--) {
      this.myPush(resultado.Array, array.Array[i]);
    }
    return resultado;
  }

  myForEach(array: myArray<T>, callback: (x: T) => void): void {
    for (let i = 0; i < array.myLength(); i++) {
      callback(array.Array[i]);
    }
  }

  myPrint() {
    console.log(this.array);
  }
}


