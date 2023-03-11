
/**
 * Clase Documental
 */
export class Documental {
  /**
   * Constructor de la clase Documental
   * @param nombre nombre del documental
   * @param año año de estreno del documental
   * @param genero género del documental
   * @param duracion duración del documental
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