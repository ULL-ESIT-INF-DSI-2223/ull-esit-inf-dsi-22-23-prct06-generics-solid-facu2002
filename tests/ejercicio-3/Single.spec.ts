import "mocha";
import { expect } from "chai";
import { Single } from "../../src/ejercicio-3/Single";


const single = new Single("Cancion1", 3, ["rap"], 10);

describe('Clase Single', () => {
  it('Single : Constructor de la clase', () => {
    expect(single).not.to.be.equal(null);
  });
  it('getNombre : getter del nombre de una instancia la clase', () => {
    expect(single.Nombre).to.be.equal("Cancion1");
  });
  it('getDuracion : getter de la duracion de una instancia la clase', () => {
    expect(single.Duracion).to.be.equal(3);
  });
  it('getGeneros : getter de los generos de una instancia la clase', () => {
    expect(single.Generos).to.be.eql(["rap"]);
  });
  it('getReproducciones : getter de las reproducciones de una instancia la clase', () => {
    expect(single.Reproducciones).to.be.eql(10);
  });
});