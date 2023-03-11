import "mocha";
import { expect } from "chai";
import { ArithmeticableCollection } from "../../src/modificacion/ArithmeticableCollection";
import { Complex } from "../../src/modificacion/Complex";

const num_complex1 = new Complex(1,2);
const num_complex2 = new Complex(3,4);
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
