import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documental } from "./Documental";


/**
 * Clase DocumentalCollection
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  /**
   * Constructor de la clase DocumentalCollection
   * @param Documentales lista de documentales
   */
  constructor(private Documentales: Documental[]) {
    super(Documentales)
  }

  /**
   * Método que dado un año, devuelve los documentales de ese año que se almacenan en la lista
   * @param año año de los documentales que se quieren buscar
   * @returns lista de documentales del año indicado
   */
  buscarPorAño(año: number): Documental[] {
    return this.Documentales.filter(Documental => Documental.Año === año);
  }

  /**
   * Método que dado un nombre, devuelve los documentales que contienen ese nombre
   * @param nombre nombre de los documentales que se quieren buscar
   * @returns lista de documentales que contienen el nombre indicado
   */
  buscarPorNombre(nombre: string): Documental[] {
    return this.Documentales.filter(Documental => Documental.Nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  /**
   * Método que dado un género, devuelve los documentales de ese género que se almacenan en la lista
   * @param genero género de los documentales que se quieren buscar
   * @returns lista de documentales del género indicado
   */
  buscarPorGenero(genero: string): Documental[] {
    return this.Documentales.filter(Documental => Documental.Genero.includes(genero));
  }

  /**
   * Método que dado un elemento, lo añade a la lista de documentales
   * @param elemento elemento que se quiere añadir a la lista
   * @returns lista de documentales con el elemento añadido
   */
  introducirElemento(elemento: Documental): Documental[] {
    this.Documentales.push(elemento);
    return this.Documentales;
  }

  /**
   * Método que dado un año, elimina los documentales de ese año que se almacenan en la lista
   * @param año año de los documentales que se quieren quitar
   * @returns lista de documentales sin los del año indicado
   */
  quitarPorAño(año: number): Documental[] {
    this.Documentales = this.Documentales.filter(Documental => Documental.Año !== año);
    return this.Documentales;
  }

  /**
   * Método que dado un nombre, elimina los documentales que contienen ese nombre
   * @param nombre nombre de los documentales que se quieren quitar
   * @returns lista de documentales sin los que contienen el nombre indicado
   */
  quitarPorNombre(nombre: string): Documental[] {
    this.Documentales = this.Documentales.filter(Documental => !Documental.Nombre.toLowerCase().includes(nombre.toLowerCase()));
    return this.Documentales;
  }

  /**
   * Método que dado un género, elimina los documentales de ese género que se almacenan en la lista
   * @param genero el género de los documentales que se quieren quitar
   * @returns lista de documentales sin los del género indicado
   */
  quitarPorGenero(genero: string): Documental[] {
    this.Documentales = this.Documentales.filter(Documental => !Documental.Genero.includes(genero));
    return this.Documentales;
  }
}