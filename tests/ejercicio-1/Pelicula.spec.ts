import "mocha";
import { expect } from "chai";
import { Pelicula } from "../../src/ejercicio-1/Pelicula";


const babyDriver = new Pelicula("Baby Driver", 2016, ["Aventura", "Fantasia"], 4);
const helloKitty = new Pelicula("Hello Kitty", 2016, ["Aventura", "Infantil"], 2);
const elReyLeon = new Pelicula("El Rey Leon", 2017, ["Drama", "Documental"], 4);
const elReyLeon2 = new Pelicula("El Rey Leon 2", 2007, ["Comedia", "Romance"], 12);
const bichos = new Pelicula("Bichos", 2007, ["Comedia", "Romance"], 12);


describe('Clase Pelicula', () => {
  it('Pelicula : Constructor de la clase', () => {
    expect(babyDriver).not.to.be.equal(null);
  });
  it('Nombre : getter del nombre que identifica una Pelicula', () => {
    expect(helloKitty.Nombre).to.be.equal("Hello Kitty");
  });
  it('Año : getter del año de lanzamiento de una Pelicula', () => {
    expect(elReyLeon.Año).to.be.equal(2017);
  });
  it('Genero : getter de los géneos que identificas una Pelicula', () => {
    expect(elReyLeon2.Genero).to.be.eql(["Comedia", "Romance"]);
  });
  it('NumeroTemporadas : getter del número de temporadas de una Pelicula', () => {
    expect(bichos.Duracion).to.be.equal(12);
  });
});
