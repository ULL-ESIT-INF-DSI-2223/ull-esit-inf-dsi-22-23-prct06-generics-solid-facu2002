import "mocha";
import { expect } from "chai";
import { Documental } from "../../src/ejercicio-1/Documental";
import { DocumentalCollection } from "../../src/ejercicio-1/DocumentalCollection";

const laVida = new Documental("La Vida", 2016, ["Aventura", "Fantasia"], 4);
const plantas = new Documental("Plantas", 2016, ["Aventura", "Fantasia"], 2);
const planetas = new Documental("Planetas", 2017, ["Drama", "Documental"], 4);
const elUniverso = new Documental("El Universo", 2007, ["Comedia", "Romance"], 12);
const insectos = new Documental("Insectos", 2007, ["Comedia", "Romance"], 12);

const reptil = new Documental("reptil", 2007, ["Comedia", "Romance"], 12);
const reptil2 = new Documental("reptil 2", 2007, ["Comedia", "Romance"], 12);

const documentales = new DocumentalCollection([laVida, plantas, planetas, elUniverso, insectos]);

describe('Clase SerieCollection', () => {
  it('DocumentalCollection : Constructor de la clase', () => {
    expect(documentales).not.to.be.equal(null);
  });
  it('buscarPorAño : método que devuelve los documentales que se lanzaron en un año determinado', () => {
    expect(documentales.buscarPorAño(2016)).to.be.eql([laVida, plantas]);
    expect(documentales.buscarPorAño(2017)).not.to.be.eql([laVida, plantas]);
  });
  it('buscarPorNombre : método que devuelve los documentales que contienen un nombre determinado', () => {
    expect(documentales.buscarPorNombre("as")).to.be.eql([plantas, planetas]);
    expect(documentales.buscarPorNombre("El")).not.to.be.eql([laVida]);
  });
  it('buscarPorGenero : método que devuelve los documentales que contienen un género determinado', () => {
    expect(documentales.buscarPorGenero("Comedia")).to.be.eql([elUniverso, insectos]);
    expect(documentales.buscarPorGenero("Aventura")).not.to.be.eql([planetas]);
  });
  it('introducirElemento : método que añade un documental a la colección', () => {
    expect(documentales.introducirElemento(reptil)).to.be.eql([laVida, plantas, planetas, elUniverso, insectos, reptil]);
    expect(documentales.introducirElemento(reptil2)).not.to.be.eql([laVida, plantas, planetas, elUniverso, insectos, reptil]);
  });
  it('quitarPorAño : método que elimina los documentales que se lanzaron en un año determinado', () => {
    expect(documentales.quitarPorAño(2007)).to.be.eql([laVida, plantas, planetas]);
    expect(documentales.quitarPorAño(2007)).not.to.be.eql([laVida]);
  });
  it('quitarPorNombre : método que elimina los documentales que contienen un nombre determinado', () => {
    expect(documentales.quitarPorNombre("pla")).to.be.eql([laVida]);
  });
  it('quitarPorGenero : método que elimina los documentales que contienen un género determinado', () => {
    documentales.introducirElemento(reptil);
    documentales.introducirElemento(reptil2);
    documentales.introducirElemento(planetas);
    expect(documentales.quitarPorGenero("Comedia")).to.be.eql([laVida, planetas]);
    expect(documentales.quitarPorGenero("Comedia")).not.to.be.eql([laVida]);
  });
});