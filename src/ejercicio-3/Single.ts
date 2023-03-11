import { Cancion } from "./Cancion";


/**
 * Clase Single
 */
export class Single extends Cancion {
  /**
   * Constructor que representa una canción que es un single
   * @param nombreSingle nombre del single
   * @param duracionSingle duración del single
   * @param generosSingle array de generos del single
   * @param reproduccionesSingle número de reproducciones del single
   */
  constructor(private nombreSingle: string, private duracionSingle: number, private generosSingle: string[], private reproduccionesSingle: number) {
    super(nombreSingle, duracionSingle, generosSingle, reproduccionesSingle);
  }

  /**
   * Getter del nombre del single
   */
  get Nombre() {
    return this.nombreSingle;
  }

  /**
   * Getter de la duración del single
   */
  get Duracion() {
    return this.duracionSingle;
  }

  /**
   * Getter de los generos del single
   */
  get Generos() {
    return this.generosSingle;
  }

  /**
   * Getter del número de reproducciones del single
   */
  get Reproducciones() {
    return this.reproduccionesSingle;
  }
}