import "mocha";
import { expect } from "chai";
import { Colaboracion } from "../../src/ejercicio-3/Colaboracion";

const colaboracion = new Colaboracion("Cancion1", 3, ["rap"], 10);

describe('Clase Colaboracion', () => {
  it('Colaboracion : Constructor de la clase', () => {
    expect(colaboracion).not.to.be.equal(null);
  });
  it('getNombre : getter del nombre de una instancia la clase', () => {
    expect(colaboracion.Nombre).to.be.equal("Cancion1");
  });
  it('getDuracion : getter de la duracion de una instancia la clase', () => {
    expect(colaboracion.Duracion).to.be.equal(3);
  });
  it('getGeneros : getter de los generos de una instancia la clase', () => {
    expect(colaboracion.Generos).to.be.eql(["rap"]);
  });
  it('getReproducciones : getter de las reproducciones de una instancia la clase', () => {
    expect(colaboracion.Reproducciones).to.be.eql(10);
  });
});