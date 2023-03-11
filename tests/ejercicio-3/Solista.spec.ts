import "mocha";
import { expect } from "chai";
import { Solista } from "../../src/ejercicio-3/Solista";
import { Single } from "../../src/ejercicio-3/Single";
import { Colaboracion } from "../../src/ejercicio-3/Colaboracion";
import { DiscoMultiple } from "../../src/ejercicio-3/DiscoMultiple";
import { DiscoSingle } from "../../src/ejercicio-3/DiscoSingle";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Disco } from "../../src/ejercicio-3/Disco";


const single1 = new Single("single1", 3, ["rap"], 10);
const colaboracion1 = new Colaboracion("colaboracion1", 3, ["pop"], 10);

const disco1 = new DiscoMultiple("disco1", 2002, [single1, colaboracion1]);
const disco2 = new DiscoMultiple("disco2", 2002, [single1, colaboracion1]);

const disco3 = new DiscoSingle("disco1", 2002, [single1, colaboracion1]);
const disco4 = new DiscoSingle("disco2", 2002, [single1, colaboracion1]);

const discografia1 = new Discografia<Disco>([disco1, disco2, disco3, disco4]);

const solista1 = new Solista("solista1", 2002, discografia1);


describe('Clase Solista', () => {
  it('Solista : Constructor de la clase', () => {
    expect(solista1).not.to.be.equal(null);
  });
  it('Nombre : getter que devuelve el nombre de una instancia de la clase', () => {
    expect(solista1.Nombre).to.be.equal("solista1");
  });
  it('Oyentes : getter que devuelve el Oyentes de una instancia de la clase', () => {
    expect(solista1.Oyentes).to.be.equal(2002);
  });
  it('Discografia : getter que devuelve el Discografia de una instancia de la clase', () => {
    expect(solista1.Discografia).to.be.eql(discografia1);
  });
});