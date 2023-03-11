import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Pelicula } from "./Pelicula";


/**
 * Clase que define los métodos de una colección de elementos de tipo Pelicula
 */
export class PeliculaCollection extends BasicStreamableCollection<Pelicula> {
  /**
   * Método constructor de la clase PeliculaCollection
   * @param peliculas lista de películas
   */
  constructor(private peliculas: Pelicula[]) {
    super(peliculas)
  }

  /**
   * Método que dado un año, devuelve las peliculas de ese año que se almacenan en la lista
   * @param año año de las peliculas que se quieren buscar
   * @returns lista de peliculas del año indicado
   */
  buscarPorAño(año: number): Pelicula[] {
    return this.peliculas.filter(Pelicula => Pelicula.Año === año);
  }

  /**
   * Método que dado un nombre, devuelve las peliculas que contienen ese nombre
   * @param nombre nombre de las peliculas que se quieren buscar
   * @returns lista de peliculas que contienen el nombre indicado
   */
  buscarPorNombre(nombre: string): Pelicula[] {
    return this.peliculas.filter(Pelicula => Pelicula.Nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  /**
   * Método que dado un género, devuelve las peliculas de ese género que se almacenan en la lista
   * @param genero género de las peliculas que se quieren buscar
   * @returns lista de peliculas del género indicado
   */
  buscarPorGenero(genero: string): Pelicula[] {
    return this.peliculas.filter(Pelicula => Pelicula.Genero.includes(genero));
  }

  /**
   * Método que dado un elemento, lo añade a la lista de peliculas
   * @param elemento elemento que se quiere añadir a la lista
   * @returns lista de peliculas con el elemento añadido
   */
  introducirElemento(elemento: Pelicula): Pelicula[] {
    this.peliculas.push(elemento);
    return this.peliculas;
  }

  /**
   * Método que dado un año, elimina las peliculas de ese año que se almacenan en la lista
   * @param año año de las peliculas que se quieren quitar
   * @returns lista de peliculas sin los del año indicado
   */
  quitarPorAño(año: number): Pelicula[] {
    this.peliculas = this.peliculas.filter(Pelicula => Pelicula.Año !== año);
    return this.peliculas;
  }

  /**
   * Método que dado un nombre, elimina las peliculas que contienen ese nombre
   * @param nombre nombre de las peliculas que se quieren quitar
   * @returns lista de peliculas sin las que contienen el nombre indicado
   */
  quitarPorNombre(nombre: string): Pelicula[] {
    this.peliculas = this.peliculas.filter(Pelicula => !Pelicula.Nombre.toLowerCase().includes(nombre.toLowerCase()));
    return this.peliculas;
  }

  /**
   * Método que dado un género, elimina las peliculas de ese género que se almacenan en la lista
   * @param genero género de las peliculas que se quieren quitar
   * @returns lista de peliculas sin los del género indicado
   */
  quitarPorGenero(genero: string): Pelicula[] {
    this.peliculas = this.peliculas.filter(Pelicula => !Pelicula.Genero.includes(genero));
    return this.peliculas;
  }
}