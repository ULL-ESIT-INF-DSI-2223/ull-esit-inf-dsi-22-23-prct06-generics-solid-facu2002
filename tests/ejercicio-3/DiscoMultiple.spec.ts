import "mocha";
import { expect } from "chai";
import { DiscoMultiple } from "../../src/ejercicio-3/DiscoMultiple";
import { Single } from "../../src/ejercicio-3/Single";
import { Colaboracion } from "../../src/ejercicio-3/Colaboracion";

const single1 = new Single("single1", 3, ["rap"], 10);
const colaboracion1 = new Colaboracion("colaboracion1", 3, ["pop"], 10);

const disco1 = new DiscoMultiple("disco1", 2002, [single1, colaboracion1]);

describe('Clase DiscoMultiple', () => {
  it('DiscoMultiple : Constructor de la clase', () => {
    expect(disco1).not.to.be.equal(null);
  });
  it('getNombre : getter del nombre de una instancia la clase', () => {
    expect(disco1.Nombre).to.be.equal("disco1");
  });
  it('getAño : getter del año de una instancia la clase', () => {
    expect(disco1.Año).to.be.equal(2002);
  });
  it('getCanciones : getter de las canciones de una instancia la clase', () => {
    expect(disco1.Canciones).to.be.eql([single1, colaboracion1]);
  });
});