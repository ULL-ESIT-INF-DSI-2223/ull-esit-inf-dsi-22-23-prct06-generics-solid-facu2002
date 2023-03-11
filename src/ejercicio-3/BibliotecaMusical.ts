import { Artista } from "./Artista";
import { Disco } from "./Disco";
import { Cancion } from "./Cancion";


/**
 * Interfaz que debe ser implementada por la clase BibliotecaMusical
 */
export interface printable {
  imprimir(): void;
}

/**
 * Interfaz que debe ser implementada por la clase BibliotecaMusical
 */
export interface searchable {
  buscarArtista(artista: string): void;
  buscarDisco(disco: string): void;
  buscarCancion(cancion: string): void;
}


/**
 * Clase BibliotecaMusical
 */
export class BibliotecaMusical implements printable, searchable {
  /**
   * Constructor de la clase BibliotecaMusical
   * @param artistas vector de artistas
   */
  constructor(private artistas: Artista[]) {}

  /**
   * Método que se encarga de retornar el vector de artistas para que se impriman en forma de tabla haciendo uso de console.table()
   * @returns vector de artistas
   */
  imprimir(): Artista[] {
    return this.artistas;
  }

  /**
   * Función que busca un artista por su nombre y la imprime en forma de tabla
   * @param artista nombre del artista a buscar
   */
  buscarArtista(artista: string): Artista[] {
    return this.artistas.filter((artistaFiltrado) => artistaFiltrado.Nombre.toLowerCase().includes(artista.toLowerCase()));
  }

  /**
   * Función que busca un disco por su nombre y la imprime en forma de tabla
   * @param disco nombre del disco a buscar
   */
  buscarDisco(disco: string): Disco[] {
    return this.artistas.map((artistaFiltrado) => artistaFiltrado.Discografia.Discos.filter((discoFiltrado) => 
    discoFiltrado.Nombre.toLowerCase().includes(disco.toLowerCase()))).flat();
  }

  /**
   * Función que busca una canción por su nombre y la imprime en forma de tabla
   * @param cancion nombre de la canción a buscar
   */
  buscarCancion(cancion: string): Cancion[] {
    return this.artistas.map((artistaFiltrado) => artistaFiltrado.Discografia.Discos.map((discoFiltrado) => 
    discoFiltrado.Canciones.filter((cancionFiltrada) => cancionFiltrada.Nombre.toLowerCase().includes(cancion.toLowerCase())))).flat().flat();
  }

  /**
   * Función que devuelve el número de canciones de un disco
   * @param nombreDisco nombre del disco del que se quiere saber el número de canciones
   * @returns el número de canciones del disco
   */
  getNumeroCanciones(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.Discografia.Discos.filter((discoFiltrado) => 
    discoFiltrado.Nombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    if(vectorCanciones[0] === undefined) {
      return -1;
    }
    return vectorCanciones[0].Canciones.length;
  }

  /**
   * Función que devuelve la duración de un disco
   * @param nombreDisco nombre del disco del que se quiere saber la duración
   * @returns duración del disco, suma de la duración de sus canciones
   */
  getDuracionDisco(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.Discografia.Discos.filter((discoFiltrado) => 
    discoFiltrado.Nombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    if(vectorCanciones[0] === undefined) {
      return -1;
    }
    return vectorCanciones[0].Canciones.reduce((acumulador, cancion) => acumulador + cancion.Duracion, 0);
  }

  /**
   * Función que devuelve el número de reproducciones de un disco
   * @param nombreDisco nombre del disco del que se quiere saber el número de reproducciones
   * @returns número de reproducciones del disco, suma de las reproducciones de sus canciones
   */
  getReproduccionesDisco(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.Discografia.Discos.filter((discoFiltrado) => 
    discoFiltrado.Nombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    if(vectorCanciones[0] === undefined) {
      return -1;
    }
    return vectorCanciones[0].Canciones.reduce((acumulador, cancion) => acumulador + cancion.Reproducciones, 0);
  }
}
