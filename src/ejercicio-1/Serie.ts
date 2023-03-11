
/**
 * Clase Serie
 */
export class Serie {
  /**
   * Constructor de la clase Serie
   * @param nombre nombre de la serie
   * @param año año de estreno de la serie
   * @param genero género de la serie
   * @param numeroTemporadas número de temporadas de la serie
   */
  constructor(private nombre: string, private año: number, private genero: string[], private numeroTemporadas: number) {}

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
   * Getter del número de temporadas
   */
  get NumeroTemporadas(): number {
    return this.numeroTemporadas;
  }
}