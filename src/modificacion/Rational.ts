import { Arithmeticable } from './ArithmeticableCollection';

/**
 * Clase que representa los números racionales y que implementa la interfaz Arithmeticable
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Constructor de la clase
   * @param numerador numerador del número
   * @param denominador denominador del número
   */
  constructor (private numerador: number, private denominador: number) {}

  /**
   * Método que suma dos números racionales
   * @param op operando que se quiere sumar
   * @returns número racional resultante de la suma
   */
  add(op: Rational): Rational {
    return new Rational((this.numerador * op.denominador) + (this.denominador * op.numerador), this.denominador * op.denominador);
  }

  /**
   * Método que resta dos números racionales
   * @param op operando que se quiere restar
   * @returns número racional resultante de la resta
   */
  substract(op: Rational): Rational {
    return new Rational((this.numerador * op.denominador) - (this.denominador * op.numerador), this.denominador * op.denominador);
  }

  /**
   * Método que multiplica dos números racionales
   * @param op operando que se quiere multiplicar
   * @returns número racional resultante de la multiplica
   */
  multiply(op: Rational): Rational {
    return new Rational(this.numerador * op.numerador, this.denominador * op.denominador);
  }

  /**
   * Método que divide dos números racionales
   * @param op operando que se quiere dividir
   * @returns número racional resultante de la divide
   */
  divide(op: Rational): Rational {
    return new Rational(this.numerador * op.denominador, this.denominador * op.numerador);
  }
}