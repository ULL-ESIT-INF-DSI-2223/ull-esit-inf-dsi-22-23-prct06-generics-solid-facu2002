import "mocha";
import { expect } from "chai";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Single } from "../../src/ejercicio-3/Single";
import { Colaboracion } from "../../src/ejercicio-3/Colaboracion";
import { DiscoMultiple } from "../../src/ejercicio-3/DiscoMultiple";
import { DiscoSingle } from "../../src/ejercicio-3/DiscoSingle";
import { Disco } from "../../src/ejercicio-3/Disco";

const single1 = new Single("single1", 3, ["rap"], 10);
const colaboracion1 = new Colaboracion("colaboracion1", 3, ["pop"], 10);

const disco1 = new DiscoMultiple("disco1", 2002, [single1, colaboracion1]);
const disco2 = new DiscoMultiple("disco2", 2002, [single1, colaboracion1]);

const disco3 = new DiscoSingle("disco1", 2002, [single1, colaboracion1]);
const disco4 = new DiscoSingle("disco2", 2002, [single1, colaboracion1]);

// Discografia con solo discosmúltiples
const discografia1 = new Discografia<Disco>([disco1, disco2]);

// Discografia con solo discossingle
const discografia2 = new Discografia<Disco>([disco3, disco4]);

// Discografia con ambos tipos de discos
const discografia3 = new Discografia<Disco>([disco1, disco2, disco3, disco4]);

describe('Clase Discografia', () => {
  it('Discografia : Constructor de la clase', () => {
    expect(discografia1).not.to.be.equal(null);
    expect(discografia2).not.to.be.equal(null);
    expect(discografia3).not.to.be.equal(null);
  });
  it('getDiscos : getter que retorna los discos de la discografia', () => {
    expect(discografia1.Discos).to.be.eql([disco1, disco2]);
    expect(discografia2.Discos).to.be.eql([disco3, disco4]);
    expect(discografia3.Discos).to.be.eql([disco1, disco2, disco3, disco4]);
  });
});