import "mocha";
import { expect } from "chai";
import { Pelicula } from "../../src/ejercicio-1/Pelicula";
import { PeliculaCollection } from "../../src/ejercicio-1/PeliculaCollection";

const babyDriver = new Pelicula("Baby Driver", 2016, ["Aventura", "Fantasia"], 4);
const helloKitty = new Pelicula("Hello Kitty", 2016, ["Aventura", "Infantil"], 2);
const elReyLeon = new Pelicula("El Rey Leon", 2017, ["Drama", "Documental"], 4);
const elReyLeon2 = new Pelicula("El Rey Leon 2", 2007, ["Comedia", "Romance"], 12);
const bichos = new Pelicula("Bichos", 2007, ["Comedia", "Romance"], 12);

const cars = new Pelicula("Cars", 2007, ["Comedia", "Romance"], 12);
const cars2 = new Pelicula("Cars 2", 2007, ["Comedia", "Romance"], 12);

const peliculas = new PeliculaCollection([elReyLeon, elReyLeon2, bichos, babyDriver, helloKitty]);

describe('Clase PeliculaCollection', () => {
  it('PeliculaCollection : Constructor de la clase', () => {
    expect(peliculas).not.to.be.equal(null);
  });
  it('buscarPorAño : método que devuelve las películas que se lanzaron en un año determinado', () => {
    expect(peliculas.buscarPorAño(2016)).to.be.eql([babyDriver, helloKitty]);
    expect(peliculas.buscarPorAño(2017)).not.to.be.eql([babyDriver, helloKitty]);
  });
  it('buscarPorNombre : método que devuelve las películas que contienen un nombre determinado', () => {
    expect(peliculas.buscarPorNombre("el")).to.be.eql([elReyLeon, elReyLeon2, helloKitty]);
    expect(peliculas.buscarPorNombre("El")).not.to.be.eql([babyDriver, helloKitty]);
  });
  it('buscarPorGenero : método que devuelve las peliculas que contienen un género determinado', () => {
    expect(peliculas.buscarPorGenero("Comedia")).to.be.eql([elReyLeon2, bichos]);
    expect(peliculas.buscarPorGenero("Aventura")).not.to.be.eql([elReyLeon]);
  });
  it('introducirElemento : método que añade una pelicula a la colección', () => {
    expect(peliculas.introducirElemento(cars)).to.be.eql([elReyLeon, elReyLeon2, bichos, babyDriver, helloKitty, cars]);
    expect(peliculas.introducirElemento(cars2)).not.to.be.eql([elReyLeon, elReyLeon2, bichos, babyDriver, helloKitty, cars]);
  });
    it('quitarPorAño : método que elimina las peliculas que se lanzaron en un año determinado', () => {
    expect(peliculas.quitarPorAño(2007)).to.be.eql([elReyLeon, babyDriver, helloKitty]);
    expect(peliculas.quitarPorAño(2007)).not.to.be.eql([elReyLeon, elReyLeon2, bichos, babyDriver, helloKitty, cars]);
  });
  it('quitarPorNombre : método que elimina las películas que contienen un nombre determinado', () => {
    expect(peliculas.quitarPorNombre("baby")).to.be.eql([elReyLeon, helloKitty]);
  });
  it('quitarPorGenero : método que elimina las películas que contienen un género determinado', () => {
    peliculas.introducirElemento(elReyLeon2);
    peliculas.introducirElemento(bichos);
    peliculas.introducirElemento(babyDriver);
    expect(peliculas.quitarPorGenero("Comedia")).to.be.eql([elReyLeon, helloKitty, babyDriver]);
    expect(peliculas.quitarPorGenero("Comedia")).not.to.be.eql([helloKitty]);
  });
});