import "mocha";
import { expect } from "chai";
import { myArray } from "../../src/ejercicio-2/myArray";


const array_number = new myArray<number>([1, 2, 3, 4, 5]);
const array_number2 = new myArray<number>([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
const array_string = new myArray<string>(["1", "2", "3", "4", "5"]);
const array_string2 = new myArray<string>(["6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]);
const array_prueba = new myArray<number>([]);

describe('Clase myArray', () => {
  it('myArray : Constructor de la clase', () => {
    expect(array_number).not.to.be.equal(null);
    expect(array_string).not.to.be.equal(null);
  });
  it('myLength : método que devuelve el tamaño de la colección', () => {
    expect(array_number.myLength()).to.be.equal(5);
    expect(array_string.myLength()).to.be.equal(5);
    expect(array_number2.myLength()).to.be.equal(10);
    expect(array_string2.myLength()).to.be.equal(10);
  });
  it('myPush : método que inserta un elemento a la colección', () => {
    expect(array_prueba.myPush(array_number.Array, 4)).to.be.eql(1);
  });
  it('myAppend : método que inserta los elementos pasados por parámetro a la lista del invocador', () => {
    expect(array_prueba.myAppend(array_number2).myLength()).to.be.eql(10);
    expect(array_prueba.myAppend(array_number).myLength()).to.be.eql(16);
  });
  it('myConcatenate : método que inserta la lista de los elementos pasados por parámetro y lo devuelve', () => {
    expect(array_number.myConcatenate(array_number2, array_number).myLength()).to.be.eql(16);
    expect(array_string.myConcatenate(array_string, array_string2).myLength()).to.be.eql(15);
  });
  it('myFilter : método que dada una lista y un predicado lógico, retorna la lista con los elementos que satisfacen la condición', () => {
    expect(array_number2.myFilter(array_number2, (x) => x % 2 === 0).Array).to.be.eql([6, 8, 10, 12, 14]);
    expect(array_number2.myFilter(array_number2, (x) => x > 7).Array).to.be.eql([8, 9, 10, 11, 12, 13, 14, 15]);
  });
  it('myMap : método que dada una lista y una función, devuelve el resultado de aplicar a cada elemento, la función', () => {
    expect(array_number2.myMap(array_number2, (x) => x * 2).Array).to.be.eql([12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
    expect(array_string2.myMap(array_string2, (x) => x + "o").Array).to.be.eql(["6o", "7o", "8o", "9o", "10o", "11o", "12o", "13o", "14o", "15o"]);
  });
  it('myReduce : método que dada una lista y una función, devuelve el resultado de aplicar a cada elemento, la función', () => {
    expect(array_number2.myReduce(array_number2, (acc, num) => acc + num)).to.be.eql(105);
    expect(array_string2.myReduce(array_string2, (acc, num) => acc + num)).to.be.eql("6789101112131415");
  });
  it('myReverse : método que dada una lista devuelve esa lista pero del revés', () => {
    expect(array_number2.myReverse(array_number2).Array).to.be.eql([15, 14, 13, 12, 11, 10, 9, 8, 7, 6]);
    expect(array_string2.myReverse(array_string2).Array).to.be.eql(["15", "14", "13", "12", "11", "10", "9", "8", "7", "6"]);
  });
  it('myForEach : método que dada una lista y una función permite iterar sobre ella aplicando la función a cada elemento', () => {
    expect(array_number2.myForEach(array_number2, (e) => e.toFixed)).to.be.eql(undefined);
  });
});