import { Discografia } from './Discografia';
import { Disco } from './Disco';


/**
 * Clase abstracta Artista
 */
export abstract class Artista {
  /**
   * Constructor de la clase abstracta Artista
   * @param nombre nombre del artista
   * @param oyentes numero de oyentes
   * @param discografia discografia del artista
   */
  constructor(private nombre: string, private oyentes: number, private discografia: Discografia<Disco>) {}

  /**
   * Getter del nombre del artista
   * Debe implementarse en las clases hijas
   */
  abstract get Nombre(): string;

  /**
   * Getter del numero de oyentes del artista
   * Debe implementarse en las clases hijas
   */
  abstract get Oyentes(): number;

  /**
   * Getter de la discografia del artista
   * Debe implementarse en las clases hijas
   */
  abstract get Discografia(): Discografia<Disco>;
}