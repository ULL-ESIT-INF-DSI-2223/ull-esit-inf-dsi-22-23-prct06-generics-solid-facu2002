/**
 * Interfaz que define los métodos de búsqueda de una colección de elementos
 */
interface Buscar<T> {
  buscarPorAño(año: number): T[];
  buscarPorNombre(nombre: string): T[];
  buscarPorGenero(genero: string): T[];
}

/**
 * Interfaz que define los métodos de introducción de una colección de elementos
 */
interface Introducir<T> {
  introducirElemento(elemento: T): T[];
}

/**
 * Interfaz que define los métodos de eliminación de una colección de elementos
 */
interface Quitar<T> {
  quitarPorAño(año: number): T[];
  quitarPorNombre(nombre: string): T[];
  quitarPorGenero(genero: string): T[];
}

/**
 * Clase abstracta que define los métodos de una colección de elementos
 */
export abstract class BasicStreamableCollection<T> implements Buscar<T>, Introducir<T>, Quitar<T> {
  /**
   * Constructor de la clase BasicStreamableCollection
   * @param coleccion lista de elementos
   */
  constructor(protected coleccion: T[]) {}

  /**
   * Método que busca en una lista filtrando por año
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param año año de los elementos que se quieren buscar
   * @returns lista de elementos del año indicado
   */
  abstract buscarPorAño(año: number): T[];
  
  /**
   * Método que busca en una lista filtrando por nombre
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param nombre nombre de los elementos que se quieren buscar
   * @returns lista de elementos que contienen el nombre indicado
   */
  abstract buscarPorNombre(nombre: string): T[];

  /**
   * Método que busca en una lista filtrando por género
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param genero género de los elementos que se quieren buscar
   * @returns lista de elementos del género indicado
   */
  abstract buscarPorGenero(genero: string): T[];

  /**
   * Método que añade un elemento a una lista
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param elemento elemento que se quiere añadir a la lista
   * @returns lista de elementos con el elemento añadido
   */
  abstract introducirElemento(elemento: T): T[];

  /**
   * Método que quita elementos de una lista filtrando por año
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param año año de los elementos que se quieren quitar
   * @returns lista de elementos sin los del año indicado
   */
  abstract quitarPorAño(año: number): T[];

  /**
   * Método que quita elementos de una lista filtrando por nombre
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param nombre nombre de los elementos que se quieren quitar
   * @returns lista de elementos sin los que contienen el nombre indicado
   */
  abstract quitarPorNombre(nombre: string): T[];

  /**
   * Método que quita elementos de una lista filtrando por género
   * Método abstracto que se debe definir en las clases que hereden de BasicStreamableCollection
   * @param genero género de los elementos que se quieren quitar
   * @returns lista de elementos sin los del género indicado
   */
  abstract quitarPorGenero(genero: string): T[];
}

