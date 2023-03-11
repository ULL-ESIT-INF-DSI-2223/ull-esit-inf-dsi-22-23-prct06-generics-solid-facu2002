import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";


/**
 * Clase SerieCollection
 */
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * constructor de la clase SerieCollection
   * @param series lista de series
   */
  constructor(private series: Serie[]) {
    super(series)
  }

  /**
   * Método que devuelve la lista de series
   * @param año año de las series que se quieren buscar
   * @returns lista de series del año indicado
   */
  buscarPorAño(año: number): Serie[] {
    return this.series.filter(serie => serie.Año === año);
  }

  /**
   * Método que devuelve la lista de series
   * @param nombre nombre de las series que se quieren buscar
   * @returns lista de series que contienen el nombre indicado
   */
  buscarPorNombre(nombre: string): Serie[] {
    return this.series.filter(serie => serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  /**
   * Método que devuelve la lista de series	
   * @param genero género de las series que se quieren buscar
   * @returns lista de series del género indicado
   */
  buscarPorGenero(genero: string): Serie[] {
    return this.series.filter(serie => serie.Genero.includes(genero));
  }

  /**
   * Método que devuelve la lista de series
   * @param elemento elemento que se quiere añadir a la lista
   * @returns lista de series con el elemento añadido
   */
  introducirElemento(elemento: Serie): Serie[] {
    this.series.push(elemento);
    return this.series;
  }

  /**
   * Método que devuelve la lista de series
   * @param año año de las series que se quieren quitar
   * @returns lista de series sin los del año indicado
   */
  quitarPorAño(año: number): Serie[] {
    this.series = this.series.filter(serie => serie.Año !== año);
    return this.series;
  }

  /**
   * Método que devuelve la lista de series
   * @param nombre nombre de las series que se quieren quitar
   * @returns lista de series sin los que contienen el nombre indicado
   */
  quitarPorNombre(nombre: string): Serie[] {
    this.series = this.series.filter(serie => !serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
    return this.series;
  }

  /**
   * Método que devuelve la lista de series	
   * @param genero género de las series que se quieren quitar
   * @returns lista de series sin los del género indicado
   */
  quitarPorGenero(genero: string): Serie[] {
    this.series = this.series.filter(serie => !serie.Genero.includes(genero));
    return this.series;
  }
}