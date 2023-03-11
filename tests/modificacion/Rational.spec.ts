import "mocha";
import { expect } from "chai";
import { Rational } from "../../src/modificacion/Rational";

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