import { Cancion } from "./Cancion";


/**
 * Clase Colaboracion
 */
export class Colaboracion extends Cancion {
  /**
   * Constructor que representa una canción que no es un single
   * @param nombreColaboracion nombre de la colaboracion
   * @param duracionColaboracion duración de la colaboracion
   * @param generosColaboracion generos de la colaboracion
   * @param reproduccionesColaboracion reproducciones de la colaboracion
   */
  constructor(private nombreColaboracion: string, private duracionColaboracion: number, 
    private generosColaboracion: string[], private reproduccionesColaboracion: number) {
    super(nombreColaboracion, duracionColaboracion, generosColaboracion, reproduccionesColaboracion);
  }

  /**
   * Getter del nombre de la colaboracion
   */
  get Nombre() {
    return this.nombreColaboracion;
  }

  /**
   * Getter de la duración de la colaboracion
   */
  get Duracion() {
    return this.duracionColaboracion;
  }

  /**
   * Getter de los generos de la colaboracion
   */
  get Generos() {
    return this.generosColaboracion;
  }

  /**
   * Getter del número de reproducciones de la colaboracion
   */
  get Reproducciones() {
    return this.reproduccionesColaboracion;
  }
}