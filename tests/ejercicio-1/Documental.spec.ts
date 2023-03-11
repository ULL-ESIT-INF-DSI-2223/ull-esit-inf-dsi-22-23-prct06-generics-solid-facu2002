import "mocha";
import { expect } from "chai";
import { Documental } from "../../src/ejercicio-1/Documental";


const laVida = new Documental("La Vida", 2016, ["Aventura", "Fantasia"], 4);
const plantas = new Documental("Plantas", 2016, ["Aventura", "Fantasia"], 2);
const planetas = new Documental("Planetas", 2017, ["Drama", "Documental"], 4);
const elUniverso = new Documental("El Universo", 2007, ["Comedia", "Romance"], 12);
const insectos = new Documental("Insectos", 2007, ["Comedia", "Romance"], 12);


describe('Clase Documental', () => {
  it('Documental : Constructor de la clase', () => {
    expect(laVida).not.to.be.equal(null);
  });
  it('Nombre : getter del nombre que identifica un Documental', () => {
    expect(plantas.Nombre).to.be.equal("Plantas");
  });
  it('Año : getter del año de lanzamiento de un Documental', () => {
    expect(planetas.Año).to.be.equal(2017);
  });
  it('Genero : getter de los géneos que identificas un Documental', () => {
    expect(elUniverso.Genero).to.be.eql(["Comedia", "Romance"]);
  });
  it('NumeroTemporadas : getter del número de temporadas de un Documental', () => {
    expect(insectos.Duracion).to.be.equal(12);
  });
});
