import "mocha";
import { expect } from "chai";
import { Solista } from "../../src/ejercicio-3/Solista";
import { Grupo } from "../../src/ejercicio-3/Grupo";
import { Single } from "../../src/ejercicio-3/Single";
import { Colaboracion } from "../../src/ejercicio-3/Colaboracion";
import { DiscoMultiple } from "../../src/ejercicio-3/DiscoMultiple";
import { DiscoSingle } from "../../src/ejercicio-3/DiscoSingle";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Disco } from "../../src/ejercicio-3/Disco";
import { BibliotecaMusical } from "../../src/ejercicio-3/BibliotecaMusical";


const single1 = new Single("single1", 3, ["rap"], 10);
const colaboracion1 = new Colaboracion("colaboracion1", 3, ["pop"], 10);

const disco1 = new DiscoMultiple("disco1", 2002, [single1, colaboracion1]);
const disco2 = new DiscoMultiple("disco2", 2002, [single1, colaboracion1]);

const disco3 = new DiscoSingle("disco3", 2002, [colaboracion1]);
const disco4 = new DiscoSingle("disco4", 2002, [single1]);

const discografia1 = new Discografia<Disco>([disco1, disco2]);
const discografia2 = new Discografia<Disco>([disco3, disco4]);

const solista1 = new Solista("solista1", 2002, discografia1);
const grupo1 = new Grupo("grupo1", 2002, discografia2);

const biblioteca = new BibliotecaMusical([solista1, grupo1]);


describe('Clase BibliotecaMusical', () => {
  it('BibliotecaMusical : Constructor de la clase', () => {
    expect(biblioteca).not.to.be.equal(null);
  });
  it('imprimir : método que devuelve el array de artistas para que se imprima', () => {
    expect(biblioteca.imprimir()).to.be.eql([solista1, grupo1]);
  });
  it('buscarArtista : método que devuelve el array de artistas que se desea buscar', () => {
    expect(biblioteca.buscarArtista("solis")).to.be.eql([solista1]);
    expect(biblioteca.buscarArtista("upo")).to.be.eql([grupo1]);
  });
  it('buscarDisco : método que devuelve el array de discos que se desea buscar', () => {
    expect(biblioteca.buscarDisco("disco1")).to.be.eql([disco1]);
    expect(biblioteca.buscarDisco("4")).to.be.eql([disco4]);
  });
  it('buscarCancion : método que devuelve el array de canciones que se desea buscar', () => {
    expect(biblioteca.buscarCancion("single1")).to.be.eql([single1, single1, single1]);
    expect(biblioteca.buscarCancion("colab")).to.be.eql([colaboracion1, colaboracion1, colaboracion1]);
  });
  it('getNumeroCanciones : método que devuelve el número de canciones que tiene un disco en concreto', () => {
    expect(biblioteca.getNumeroCanciones("disco1")).to.be.eql(2);
    expect(biblioteca.getNumeroCanciones("w")).to.be.eql(-1);
  });
  it('getDuracionDisco : método que devuelve la duración de las canciones que tiene un disco en concreto', () => {
    expect(biblioteca.getDuracionDisco("disco1")).to.be.eql(6);
    expect(biblioteca.getDuracionDisco("x")).to.be.eql(-1);
  });
  it('getReproduccionesDisco : método que devuelve las reproducciones de las canciones que tiene un disco en concreto', () => {
    expect(biblioteca.getReproduccionesDisco("disco1")).to.be.eql(20);
    expect(biblioteca.getReproduccionesDisco("x")).to.be.eql(-1);
  });
});

