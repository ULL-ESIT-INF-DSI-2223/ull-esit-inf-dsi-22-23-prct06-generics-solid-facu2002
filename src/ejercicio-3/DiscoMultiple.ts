import { Cancion } from './Cancion';
import { Disco } from './Disco';

/**
 * Clase DiscoSimple
 */
export class DiscoMultiple extends Disco {
  /**
   * Método constructor de la clase DiscoSimple, la cual representa un disco que no es un single
   * @param nombreDiscoMultiple nombre del disco
   * @param añoDiscoMultiple año de publicación del disco
   * @param cancionesDiscoMultiple array de canciones del disco
   */
  constructor(private nombreDiscoMultiple: string, private añoDiscoMultiple: number, private cancionesDiscoMultiple: Cancion[]) {
    super(nombreDiscoMultiple, añoDiscoMultiple, cancionesDiscoMultiple);
  }

  /**
   * Getter del nombre del disco
   */
  get Nombre(): string {
    return this.nombreDiscoMultiple;
  }

  /**
   * Getter del año del disco
   */
  get Año(): number {
    return this.añoDiscoMultiple;
  }

  /**
   * Getter del array de canciones del disco
   */
  get Canciones(): Cancion[] {
    return this.cancionesDiscoMultiple;
  }
}