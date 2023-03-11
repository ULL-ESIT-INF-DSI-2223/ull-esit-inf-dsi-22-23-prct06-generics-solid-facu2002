
/**
 * Clase Pelicula
 */
export class Pelicula {
  /**
   * Constructor de la clase Pelicula
   * @param nombre nombre de la pelicula
   * @param año año de estreno de la pelicula
   * @param genero género de la pelicula
   * @param duracion duración de la pelicula
   */
  constructor(private nombre: string, private año: number, private genero: string[], private duracion: number) {}

  /**
   * Getter del nombre
   */
  get Nombre(): string {
    return this.nombre;
  }

  /**
   * Getter del año
   */
  get Año(): number {
    return this.año;
  }

  /**
   * Getter del género
   */
  get Genero(): string[] {
    return this.genero;
  }

  /**
   * Getter de la duración
   */
  get Duracion(): number {
    return this.duracion;
  }
}