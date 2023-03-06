import "mocha";
import { expect } from "chai";
import { ArithmeticableCollection } from "../../src/modificacion/ArithmeticableCollection";
import { Complex } from "../../src/modificacion/ArithmeticableCollection";
import { Rational } from "../../src/modificacion/ArithmeticableCollection";

const num_complex1 = new Complex(1,2);
const num_complex2 = new Complex(3,4);

describe('Clase Complex', () => {
  it('Complex : Constructor de la clase', () => {
    expect(new Complex(1,2)).not.to.be.equal(null);
  });
  it('Add : método que devuelve un número complejo resultante de la suma', () => {
    expect(num_complex1.add(num_complex2)).to.be.eql(new Complex(4,6));
  });
  it('Substract : método que devuelve un número complejo resultante de la resta', () => {
    expect(num_complex2.substract(num_complex1)).to.be.eql(new Complex(2,2));
  });
  it('Multiply : método que devuelve un número complejo resultante de la multiplicación', () => {
    expect(num_complex1.multiply(num_complex2)).to.be.eql(new Complex(-5,10));
  });
  it('Divide : método que devuelve un número complejo resultante de la división', () => {
    expect(num_complex1.divide(num_complex2)).to.be.eql(new Complex(0.44,0.08));
  });
});

const num_rational1 = new Rational(1,2);
const num_rational2 = new Rational(3,4);

describe('Clase Rational', () => {
  it('Rational : Constructor de la clase', () => {
    expect(new Rational(1,2)).not.to.be.equal(null);
  });
  it('Add : método que devuelve un número complejo resultante de la suma', () => {
    expect(num_rational1.add(num_rational2)).to.be.eql(new Rational(10,8));
  });
  it('Substract : método que devuelve un número complejo resultante de la resta', () => {
    expect(num_rational2.substract(num_rational1)).to.be.eql(new Rational(2,8));
  });
  it('Multiply : método que devuelve un número complejo resultante de la multiplicación', () => {
    expect(num_rational1.multiply(num_rational2)).to.be.eql(new Rational(3,8));
  });
  it('Divide : método que devuelve un número complejo resultante de la división', () => {
    expect(num_rational1.divide(num_rational2)).to.be.eql(new Rational(4,6));
  });
});


const array = new ArithmeticableCollection<Complex>([]);
array.addArithmeticable(num_complex1);

describe('Clase ArithmeticableCollection', () => {
  it('ArithmeticableCollection : Constructor de la clase', () => {
    expect(new ArithmeticableCollection<Complex>([])).not.to.be.equal(null);
  });
  it('addArithmeticable : Método que agrega un elemento a la colección', () => {
    expect(array.addArithmeticable(num_complex2)).to.be.eql(num_complex2);
  });
  it('getArithmeticable : Método que devuelve un elemento de la colección', () => {
    expect(array.getArithmeticable(0)).to.be.eql(new Complex(1,2));
  });
  it('getNumberOfArithmeticables : Método que devuelve la longitud de la colección', () => {
    expect(array.getNumberOfArithmeticables()).to.be.eql(2);
  });
});
