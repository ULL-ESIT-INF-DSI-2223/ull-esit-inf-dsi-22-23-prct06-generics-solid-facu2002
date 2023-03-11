import "mocha";
import { expect } from "chai";
import { Serie } from "../../src/ejercicio-1/Serie";


const strangerThings = new Serie("Stranger Things", 2016, ["Aventura", "Fantasia"], 4);
const theWitcher = new Serie("The Witcher", 2016, ["Aventura", "Fantasia"], 2);
const theGoodDoctor = new Serie("The Good Doctor", 2017, ["Drama", "Documental"], 4);
const theBigBangTheory = new Serie("The Big Bang Theory", 2007, ["Comedia", "Romance"], 12);

describe('Clase Serie', () => {
  it('Serie : Constructor de la clase', () => {
    expect(strangerThings).not.to.be.equal(null);
  });
  it('Nombre : getter del nombre que identifica una serie', () => {
    expect(theGoodDoctor.Nombre).to.be.equal("The Good Doctor");
  });
  it('Año : getter del año de lanzamiento de una serie', () => {
    expect(theBigBangTheory.Año).to.be.equal(2007);
  });
  it('Genero : getter de los géneos que identificas una serie', () => {
    expect(theWitcher.Genero).to.be.eql(["Aventura", "Fantasia"]);
  });
  it('NumeroTemporadas : getter del número de temporadas de una serie', () => {
    expect(theGoodDoctor.NumeroTemporadas).to.be.equal(4);
  });
});
