import "mocha";
import { expect } from "chai";
import { Complex } from "../../src/modificacion/Complex";

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