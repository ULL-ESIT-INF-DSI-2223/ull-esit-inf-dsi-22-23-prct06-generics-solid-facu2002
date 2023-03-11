import { Disco } from './Disco';


/**
 * Clase Discografia
 */
export class Discografia<T extends Disco> {
  /**
   * Constructor de la clase Discografia
   * @param discografia array de discos
   */
  constructor(private discografia: T[]) {}

  /**
   * Getter del array de discos
   */
  get Discos(): T[] {
    return this.discografia;
  }
}