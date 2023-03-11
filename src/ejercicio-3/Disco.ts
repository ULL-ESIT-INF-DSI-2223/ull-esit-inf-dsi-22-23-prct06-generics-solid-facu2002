import { Cancion } from './Cancion';


/**
 * Clase Disco
 */
export abstract class Disco {
  /**
   * Constructor de la clase Disco
   * @param nombre nombre del disco
   * @param año año del disco
   * @param canciones array de canciones del disco
   */
  constructor(private nombre: string, private año: number, private canciones: Cancion[]) {}
  
  /**
   * Getter del nombre del disco
   * Debe implementarse en las clases hijas
   */
  abstract get Nombre(): string;

  /**
   * Getter del año del disco
   * Debe implementarse en las clases hijas
   */
  abstract get Año(): number;

  /**
   * Getter del array de canciones del disco
   * Debe implementarse en las clases hijas
   */
  abstract get Canciones(): Cancion[];
}
