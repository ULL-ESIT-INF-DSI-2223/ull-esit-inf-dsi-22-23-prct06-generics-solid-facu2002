import "mocha";
import { expect } from "chai";
import { Serie } from "../../src/ejercicio-1/Serie";
import { SerieCollection } from "../../src/ejercicio-1/SerieCollection";

const strangerThings = new Serie("Stranger Things", 2016, ["Aventura", "Fantasia"], 4);
const theWitcher = new Serie("The Witcher", 2016, ["Aventura", "Fantasia"], 2);
const theGoodDoctor = new Serie("The Good Doctor", 2017, ["Drama", "Documental"], 4);
const theBigBangTheory = new Serie("The Big Bang Theory", 2007, ["Comedia", "Romance"], 12);


const series = new SerieCollection([strangerThings, theWitcher, theBigBangTheory]);

describe('Clase SerieCollection', () => {
  it('SerieCollection : Constructor de la clase', () => {
    expect(series).not.to.be.equal(null);
  });
  it('buscarPorAño : método que devuelve las series que se lanzaron en un año determinado', () => {
    expect(series.buscarPorAño(2016)).to.be.eql([strangerThings, theWitcher]);
    expect(series.buscarPorAño(2017)).not.to.be.eql([strangerThings, theWitcher, theGoodDoctor, theBigBangTheory]);
  });
  it('buscarPorNombre : método que devuelve las series que contienen un nombre determinado', () => {
    expect(series.buscarPorNombre("The")).to.be.eql([theWitcher, theBigBangTheory]);
    expect(series.buscarPorNombre("The")).not.to.be.eql([strangerThings]);
  });
  it('buscarPorGenero : método que devuelve las series que contienen un género determinado', () => {
    expect(series.buscarPorGenero("Aventura")).to.be.eql([strangerThings, theWitcher]);
    expect(series.buscarPorGenero("Aventura")).not.to.be.eql([theGoodDoctor, theBigBangTheory]);
  });
  it('introducirElemento : método que añade una serie a la colección', () => {
    expect(series.introducirElemento(theGoodDoctor)).to.be.eql([strangerThings, theWitcher, theBigBangTheory, theGoodDoctor]);
    expect(series.introducirElemento(theBigBangTheory)).not.to.be.eql([strangerThings, theWitcher, theGoodDoctor]);
  });
  it('quitarPorAño : método que elimina las series que se lanzaron en un año determinado', () => {
    expect(series.quitarPorAño(2007)).to.be.eql([strangerThings, theWitcher, theGoodDoctor]);
    expect(series.quitarPorAño(2016)).not.to.be.eql([strangerThings, theWitcher, theGoodDoctor]);
  });
  it('quitarPorNombre : método que elimina las series que contienen un nombre determinado', () => {
    expect(series.quitarPorNombre("The")).to.be.eql([]);
    expect(series.quitarPorNombre("The")).not.to.be.eql([strangerThings]);
  });
  it('quitarPorGenero : método que elimina las series que contienen un género determinado', () => {
    series.introducirElemento(theGoodDoctor);
    series.introducirElemento(theWitcher);
    series.introducirElemento(theBigBangTheory);
    expect(series.quitarPorGenero("Aventura")).to.be.eql([theGoodDoctor, theBigBangTheory]);
    expect(series.quitarPorGenero("Aventura")).not.to.be.eql([theGoodDoctor, theWitcher, theBigBangTheory]);
  });
});