import { Cancion } from './Cancion';
import { Disco } from './Disco';

/**
 * Clase DiscoSimple
 */
export class DiscoSingle extends Disco {
  /**
   * Método constructor de la clase DiscoSimple, la cual representa un disco que solo puede contener una cancion
   * @param nombreDiscoSingle nombre del disco
   * @param añoDiscoSingle año de publicación del disco
   * @param cancionesDiscoSingle 
   */
  constructor(private nombreDiscoSingle: string, private añoDiscoSingle: number, private cancionesDiscoSingle: Cancion[]) {
    super(nombreDiscoSingle, añoDiscoSingle, cancionesDiscoSingle);
  }

  /**
   * Getter del nombre del disco
   */
  get Nombre(): string {
    return this.nombreDiscoSingle;
  }

  /**
   * Getter del año del disco
   */
  get Año(): number {
    return this.añoDiscoSingle;
  }

  /**
   * Getter del array de canciones del disco
   */
  get Canciones(): Cancion[] {
    return this.cancionesDiscoSingle;
  }
}