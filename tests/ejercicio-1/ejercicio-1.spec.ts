import "mocha";
import { expect } from "chai";
import { prueba } from "../../src/ejercicio-1/ejercicio-1";


describe('Prueba', () => {
  it('should return "Hola mundo"', () => {
    expect(prueba()).to.be.equal("Hola mundo");
  });
});