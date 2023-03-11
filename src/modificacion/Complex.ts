import { Arithmeticable } from './ArithmeticableCollection';


/**
 * Clase que representa los números complejos y que implementa la interfaz Arithmeticable
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor de la clase
   * @param real parte real del número complejo
   * @param imaginaria parte imaginaria del número complejo
   */
  constructor (private real: number, private imaginaria: number) {}

  /**
   * Método que suma dos números complejos
   * @param op operando de tipo Complex
   * @returns número complejo que es el resultado de sumar el número complejo actual con el operando
   */
  add(op: Complex): Complex {
    return new Complex(this.real + op.real, this.imaginaria + op.imaginaria);
  }

  /**
   * Método que resta dos números complejos
   * @param op operando de tipo Complex
   * @returns número complejo que es el resultado de restar el número complejo actual con el operando
   */
  substract(op: Complex): Complex {
    return new Complex(this.real - op.real, this.imaginaria - op.imaginaria);
  }

  /**
   * Método que multiplica dos números complejos
   * @param op operando de tipo Complex
   * @returns número complejo resultante de la multiplicación
   */
  multiply(op: Complex): Complex {
    return new Complex(this.real * op.real - this.imaginaria * op.imaginaria, this.real * op.imaginaria + this.imaginaria * op.real);
  }

  /**
   * Método que divide dos números complejos
   * @param op operando de tipo Complex
   * @returns número complejo resultante de la división
   */
  divide(op: Complex): Complex {
    return new Complex((this.real * op.real + this.imaginaria * op.imaginaria) / (op.real * op.real + op.imaginaria * op.imaginaria), 
    (this.imaginaria * op.real - this.real * op.imaginaria) / (op.real * op.real + op.imaginaria * op.imaginaria));
  }
}

