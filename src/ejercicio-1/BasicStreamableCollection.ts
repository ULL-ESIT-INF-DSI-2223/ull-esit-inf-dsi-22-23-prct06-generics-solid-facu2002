interface Searchable<T> {
  buscarPorAño(año: number): T[];
  buscarPorNombre(nombre: string): T[];
  buscarPorGenero(genero: string): T[];
}

interface Introducir<T> {
  introducirElemento(elemento: T): T[];
}

interface Quitar<T> {
  quitarPorAño(año: number): T[];
  quitarPorNombre(nombre: string): T[];
  quitarPorGenero(genero: string): T[];
}

export abstract class BasicStreamableCollection<T> implements Searchable<T>, Introducir<T>, Quitar<T> {
  constructor(protected coleccion: T[]) {}
  abstract buscarPorAño(año: number): T[];
  abstract buscarPorNombre(nombre: string): T[];
  abstract buscarPorGenero(genero: string): T[];
  abstract introducirElemento(elemento: T): T[];
  abstract quitarPorAño(año: number): T[];
  abstract quitarPorNombre(nombre: string): T[];
  abstract quitarPorGenero(genero: string): T[];
}

