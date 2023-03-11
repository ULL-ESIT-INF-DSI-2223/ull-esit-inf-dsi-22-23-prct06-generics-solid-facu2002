
/**
 * Clase Cancion
 */
export abstract class Cancion {
  /**
   * Constructor de la clase Cancion
   * @param nombre nombre de la canción
   * @param duracion duración de la canción
   * @param generos generos de la canción
   * @param reproducciones número de reproducciones de la canción
   */
  constructor(private nombre: string, private duracion: number, private generos: string[], private reproducciones: number) {}

  /**
   * Getter del nombre de la canción
   * Debe implementarse en las clases hijas
   */
  abstract get Nombre(): string;

  /**
   * Getter de la duración de la canción
   * Debe implementarse en las clases hijas
   */
  abstract get Duracion(): number;

  /**
   * Getter de los generos de la canción
   * Debe implementarse en las clases hijas
   */
  abstract get Generos(): string[];

  /**
   * Getter del número de reproducciones de la canción
   * Debe implementarse en las clases hijas
   */
  abstract get Reproducciones(): number;
}