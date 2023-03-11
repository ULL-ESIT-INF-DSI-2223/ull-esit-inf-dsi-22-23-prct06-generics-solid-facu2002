# Práctica 6 : Clases e interfaces genéricas

## Facundo José García Gallo

### Índice

1. [Introducción](#introducción)
2. [Ejercicio 1 : DSIflix](#ejercicio-1--dsiflix)
3. [Ejercicio 2 : Implementación de una lista y sus operaciones](#ejercicio-2--implementación-de-una-lista-y-sus-operaciones)
4. [Ejercicio 3 : Ampliando la biblioteca musical](#ejercicio-3--ampliando-la-biblioteca-musical)
5. [Modificación : Arithmeticable Collection](#modificación--arithmeticable-collection)
6. [Conclusión](#conclusión)
7. [Bibliografía](#bibliografía)

### Introducción

La siguiente práctica versará sobre las clases genéricas y las interfaces genéricas. Una clase genérica es una clase que puede ser parametrizada por un tipo, el cual en tiempo de ejecución será sustituido por un tipo concreto. Las interfaces genéricas son similares a las clases genéricas, pero en este caso, la interfaz representan aquellos métodos que deben ser implementados por las clases, parametrizados por un tipo. Para ayudar a entender estos conceptos se tendrá que llevar a cabo una serie de ejercicios, en concreto tres.

### Ejercicio 1 : DSIflix

Para la realización de este ejercicio hice una clase abstracta llamada BasicStreamableCollection, a partir de ella cuelgan tres clases no abstractas, SeriesCollection, PeliculaCollection y DocumentalCollection. Estas tres últimas clases representan colecciones de diferentes item, los cuales también decidí dividirlos en tres clases, Serie, Pelicula y Documental.

Comenzamos por la clase BasicStreamableCollection, la cual implementa tres interfaces:

La primera interfaz obliga a la clase a definir tres métodos para buscar elementos dentro de la lista, cada una con un parámetro diferente: por año, por nombre y por género.
```typescript
interface Searchable<T> {
  buscarPorAño(año: number): T[];
  buscarPorNombre(nombre: string): T[];
  buscarPorGenero(genero: string): T[];
}
```

La segunda interfaz obliga a la clase a definir un método para introducir elementos en la lista.
```typescript
interface Introducir<T> {
  introducirElemento(elemento: T): T[];
}
```

La tercera interfaz obliga a la clase a definir tres métodos para quitar elementos de la lista, cada una con un parámetro diferente: por año, por nombre y por género.
```typescript
interface Quitar<T> {
  quitarPorAño(año: number): T[];
  quitarPorNombre(nombre: string): T[];
  quitarPorGenero(genero: string): T[];
}
```

La clase BasicStreamableCollection, como dijimos anteriormente, es una clase abstracta, por lo que no se puede instanciar, esta clase tiene siete métodos abstractos que deben estar definidos en cada una de las clases hijas que hereden de ella. Estos métodos son los que implementan las tres interfaces que hemos visto anteriormente.
```typescript
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
```

A partir de ahora, pasaré a explicar las clases que heredan de la clase BasicStreamableCollection, pero como cada una hace lo mismo pero con un tipo de dato diferente, solo explicaré una de ellas, las demás son análogas.

Para empezar, el constructor de la clase SerieCollection recibe un array de objetos de tipo Serie, y lo pasa al constructor de la clase padre.
```typescript	
export class SerieCollection extends BasicStreamableCollection<Serie> {
  constructor(private series: Serie[]) {
    super(series)
  }
```
A continuación se definen los métodos que implementan las tres interfaces que hemos visto anteriormente.
El método buscarPorAño recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que coincidan con el año pasado por parámetro.
```typescript	
buscarPorAño(año: number): Serie[] {
  return this.series.filter(serie => serie.Año === año);
}
```

La función buscarPorNombre recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que coincidan con el nombre pasado por parámetro, gracias a la ayuda de la función includes.
```typescript
buscarPorNombre(nombre: string): Serie[] {
  return this.series.filter(serie => serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
}
```

La función buscarPorGenero recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que coincidan con el género pasado por parámetro, gracias a la ayuda de la función includes.
```typescript	
buscarPorGenero(genero: string): Serie[] {
  return this.series.filter(serie => serie.Genero.includes(genero));
}
```

La función introducirElemento recibe un objeto de tipo Serie y lo añade al vector de series.
```typescript	
introducirElemento(elemento: Serie): Serie[] {
  this.series.push(elemento);
  return this.series;
}
```

El método quitarPorAño recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que no coincidan con el año pasado por parámetro, el cual se iguala al atributo.
```typescript
quitarPorAño(año: number): Serie[] {
  this.series = this.series.filter(serie => serie.Año !== año);
  return this.series;
}
```

El método quitarPorNombre recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que no coincidan con el nombre pasado por parámetro, el cual se iguala al atributo.
```typescript
quitarPorNombre(nombre: string): Serie[] {
  this.series = this.series.filter(serie => !serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
  return this.series;
}
```

La función quitarPorGenero recorre el vector de series y, con ayuda de la función filter, devuelve un array con las series que no coincidan con el género pasado por parámetro, el cual se iguala al atributo.
```typescript
quitarPorGenero(genero: string): Serie[] {
  this.series = this.series.filter(serie => !serie.Genero.includes(genero));
  return this.series;
}
```

La realización de las clases DocumentalCollection y PeliculaCollection es análoga a la clase SerieCollection, por lo que no voy a explicarlas.

Por último queda explicar las tres clases básicas, Serie, Documental y Película, que son las que se utilizan para crear los objetos que se añaden a las colecciones.

Para empezar, la clase Serie:

Esta clase, al igual que las otras dos, es una clase sencilla que implementa un constructor simplificado, el cual recibe una string que simula el nombre de la película, un número que simula el año de la película, un array de strings que simula los géneros de la película y un número que simula el número de temporadas de la serie.
```typescript
export class Serie {
  constructor(private nombre: string, private año: number, private genero: string[], private numeroTemporadas: number) {}
}
```

Por último se definen todos los getters de los atributos privados de la clase, respetando el principio de encapsulación, ya que no se pueden modificar los atributos de la clase desde fuera de ella.

```typescript	
get Nombre(): string {
  return this.nombre;
}
get Año(): number {
  return this.año;
}
get Genero(): string[] {
  return this.genero;
}
get NumeroTemporadas(): number {
  return this.numeroTemporadas;
}
```

Lo mismo ocurre para la clase Documental:

Esta clase, también implementa un constructor simplificado, el cual recibe una string que simula el nombre de la película, un número que simula el año de la película, un array de strings que simula los géneros de la película y un número que simula la duración de la película.

```typescript
export class Documental {
  constructor(private nombre: string, private año: number, private genero: string[], private duracion: number) {}
}
```

Por último se definen todos los getters de los atributos privados de la clase, respetando el principio de encapsulación, ya que no se pueden modificar los atributos de la clase desde fuera de ella.
```typescript	
get Nombre(): string {
  return this.nombre;
}

get Año(): number {
  return this.año;
}

get Genero(): string[] {
  return this.genero;
}

get Duracion(): number {
  return this.duracion;
}
```


Por último está la clase Película:

Esta clase, también implementa un constructor simplificado, el cual recibe una string que simula el nombre de la película, un número que simula el año de la película, un array de strings que simula los géneros de la película y un número que simula la duración de la película.
```typescript
export class Pelicula {
  constructor(private nombre: string, private año: number, private genero: string[], private duracion: number) {}
}
```

Por último se definen todos los getters de los atributos privados de la clase, respetando el principio de encapsulación, ya que no se pueden modificar los atributos de la clase desde fuera de ella.
```typescript
get Nombre(): string {
  return this.nombre;
}

get Año(): number {
  return this.año;
}

get Genero(): string[] {
  return this.genero;
}

get Duracion(): number {
  return this.duracion;
}
```


### Ejercicio 2 : Implementación de una lista y sus operaciones

Para la realización de este ejercicio se nos pedía implementar nuestra propia clase lista, sin utilizar ninguno de los métodos de Array.prototype, menos el operador de acces []. Para ello, creé una clase llamada myArray, la cual recibe un array de tipo T, y tiene un getter que devuelve el array.

```typescript
export class myArray<T> {
  constructor(private array: T[]) {}
  get Array() {
    return this.array;
  }
```

Para poder manipular bien los datos decidí crear dos funciones que me devuelven el número de elementos que tiene el array y la otra inserta un elemento en el array.

Esta función recorre el array y, mientras el elemento no sea undefined, aumenta el contador, que es el que devuelve al finalizar.

```typescript
  myLength() {
    let contador = 0;
    while(this.array[contador] !== undefined) {
      contador++;
    }
    return contador;
  }
```

La función myPush recibe un array y un número indeterminado de elementos, y los inserta en el array, devolviendo el número de elementos insertados.

```typescript
  myPush(array: T[], ...elementos: T[]): number {
    let contador = 0;
    for (let i = 0; elementos[i] !== undefined; i++) {
      array[array.length] = elementos[i];
      contador++;
    }
    return contador;
  }
```

A continuación pasamos a los métodos que se nos pide implementar en el ejercicio. Comenzando por myAppend:

Este método recibe un array de tipo T, y lo inserta al atributo array del objeto invocador, que debe ser si o si un objeto de la clase myArray.

```typescript	
  myAppend(elemento: myArray<T>): myArray<T> {
    for (let i = 0; i < elemento.myLength(); i++) {
      this.myPush(this.array, elemento.Array[i]);
    }
    return this;
  }
```


El siguiente método es myConcatenate, el cual realiza la misma operación pero con varias listas. Además este método devuelve un objeto de la clase myArray, al contrario que el anterior.

```typescript
  myConcatenate(...elementos: myArray<T>[]): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; elementos[i] !== undefined; i++) {
      for (let j = 0; j < elementos[i].myLength(); j++) {
        resultado.myPush(resultado.array, elementos[i].Array[j]);
      }
    }
    return resultado;
  }
```

La siguiente función es myFilter, la cual recibe un array de tipo T, y un callback, que es una función que recibe un elemento de tipo T y devuelve un booleano. El método devuelve un array de tipo T, que contiene los elementos que cumplen la condición del callback.

```typescript
  myFilter(array: myArray<T>, callback: (x: T) => boolean): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      if (callback(array.Array[i])) {
        this.myPush(resultado.Array, array.Array[i]);
      }
    }
    return resultado;
  }
```

La siguiente función es myMap, la cual recibe un array de tipo T, y un callback, que es una función que recibe un elemento de tipo T y devuelve un elemento de tipo T. El método devuelve un array de tipo T, que contiene los elementos que devuelve el callback.

```typescript
  myMap(array: myArray<T>, callback: (x: T) => T): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = 0; i < array.myLength(); i++) {
      this.myPush(resultado.Array, callback(array.Array[i]));
    }
    return resultado;
  }
```

La siguiente función es myReduce, la cual recibe un array de tipo T, y un callback, que es una función que recibe dos elementos de tipo T y devuelve un elemento de tipo T. El método devuelve un elemento de tipo T, que es el resultado de aplicar el callback a todos los elementos del array.

```typescript
  myReduce(array: myArray<T>, callback: (x: T, y: T) => T): T {
    let resultado = array.Array[0];
    for (let i = 1; i < array.myLength(); i++) {
      resultado = callback(resultado, array.Array[i]);
    }
    return resultado;
  }
```

El siguiente método es myReverse, el cual recibe un array de tipo T, y devuelve un array de tipo T, que contiene los elementos del array original en orden inverso.

```typescript
  myReverse(array: myArray<T>): myArray<T> {
    const resultado = new myArray<T>([]);
    for (let i = array.myLength() - 1; i >= 0; i--) {
      this.myPush(resultado.Array, array.Array[i]);
    }
    return resultado;
  }
```

La última función que se pide es myForEach, la cual recibe un array de tipo T, y un callback, que es una función que recibe un elemento de tipo T. La función no devuelve nada, simplemente ejecuta el callback para cada elemento del array.

```typescript
  myForEach(array: myArray<T>, callback: (x: T) => void): void {
    for (let i = 0; i < array.myLength(); i++) {
      callback(array.Array[i]);
    }
  }
}
```

### Ejercicio 3 : Ampliando la biblioteca musical

Para la realización de este ejercicio he decidido crear una clase llamada cancion, esta clase será abstracta, por lo que no se podrán crear instancias de ella, en cambio creé dos clases que heredan de ella, una llamada single y otra llamada colaboración. Todos los métodos declarados abstractos en la clase madre, serán implementados en las clases hijas.

La implementación de la clase Canción es muy simple, un constructor y los diferentes métodos que deben implementar las clases hijas.

```typescript
export abstract class Cancion {
  constructor(private nombre: string, private duracion: number, private generos: string[], private reproducciones: number) {}
  abstract get Nombre(): string;
  abstract get Duracion(): number;
  abstract get Generos(): string[];
  abstract get Reproducciones(): number;
}
```

Para las clases hijas no me voy a entretener mucho ya que las dos son similares, pasaré a explicar la clase Single.

Para empezar, aparece el constructor de la clase, el cual recibe una string que simula el nombre de la canción, un número que simula la duración de la canción, un array de strings que simula los géneros de la canción y un número que simula el número de reproducciones de la canción.

```typescript
export class Single extends Cancion {
  constructor(private nombreSingle: string, private duracionSingle: number, private generosSingle: string[], private reproduccionesSingle: number) {
    super(nombreSingle, duracionSingle, generosSingle, reproduccionesSingle);
  }
```

Por otro lado aparecen cada uno de los getters de los atributos anteriormente mencionados.

```typescript
  get Nombre() {
    return this.nombreSingle;
  }

  get Duracion() {
    return this.duracionSingle;
  }

  get Generos() {
    return this.generosSingle;
  }

  get Reproducciones() {
    return this.reproduccionesSingle;
  }
}
```

A continuación viene la clase Disco, la cual representa una colección de canciones. Esta clase también es una clase abstracta, la cual contiene un constructor y algunos métodos abstractos que serán implementados en las clases hijas.

```typescript
export abstract class Disco {
  constructor(private nombre: string, private año: number, private canciones: Cancion[]) {}
  abstract get Nombre(): string;
  abstract get Año(): number;
  abstract get Canciones(): Cancion[];
}
```	

Para las clases hijas no me voy a entretener mucho ya que las dos son similares, pasaré a explicar la clase DiscoMultiple:

Por un lado aparece el constructor de la clase, el cual recibe una string que simula el nombre del disco, un número que simula el año del disco y un array de canciones que simula las canciones del disco.

```typescript
export class DiscoMultiple extends Disco {
  constructor(private nombreDiscoMultiple: string, private añoDiscoMultiple: number, private cancionesDiscoMultiple: Cancion[]) {
    super(nombreDiscoMultiple, añoDiscoMultiple, cancionesDiscoMultiple);
  }
```

Por otro lado aparecen cada uno de los getters de los atributos anteriormente mencionados.

```typescript
get Nombre(): string {
    return this.nombreDiscoMultiple;
  }
  get Año(): number {
    return this.añoDiscoMultiple;
  }
  get Canciones(): Cancion[] {
    return this.cancionesDiscoMultiple;
  }
}
```	


A continuación aparece la clase Discografía, la cual representa una colección de discos, esta clase es genérica y extiende la utilización de la clase Disco como tipo de dato genérico. Por tanto, podremos crear instancias de discografías de cualquier tipo de disco, múltiple o single. También tenemos un getter que devuelve la colección de discos.


```typescript
export class Discografia<T extends Disco> {
  constructor(private discografia: T[]) {}
  get Discos(): T[] {
    return this.discografia;
  }
}
```

La siguiente clase que pasaré a explicar será la clase Artista, la cual también es una clase abstracta. Las clases hijas, Solista y Grupo, son clases normales, las cuales pueden ser instanciadas.

Como podemos ver, la clase Artista tiene un constructor que recibe una string que simula el nombre del artista, un número que simula el número de oyentes del artista y una discografía que simula la discografía del artista. Además aparecen cada uno de los getters de estos atributos como abstractos para que sean implementados en las clases hijas.

```typescript
export abstract class Artista {
  constructor(private nombre: string, private oyentes: number, private discografia: Discografia<Disco>) {}
  abstract get Nombre(): string;
  abstract get Oyentes(): number;
  abstract get Discografia(): Discografia<Disco>;
}
```

A continuación aparece la clase Solista, la cual hereda de la clase Artista. Como podemos ver, la clase Solista tiene un constructor que recibe una string que simula el nombre del solista, un número que simula el número de oyentes del solista y una discografía que simula la discografía del solista. Además aparecen cada uno de los getters de estos atributos.


```typescript	
export class Solista extends Artista {
  constructor(private nombreSolista: string, private oyentesSolista: number, private discografiaSolista: Discografia<Disco>) {
    super(nombreSolista, oyentesSolista, discografiaSolista);
  }
  get Nombre(): string {
    return this.nombreSolista;
  }
  get Oyentes(): number {
    return this.oyentesSolista;
  }
  get Discografia(): Discografia<Disco> {
    return this.discografiaSolista;
  }
}
```

No explicaré la clase Grupo porque es idéntica a la clase Solista.

Por último aparece la clase BibliotecaMusical, que es donde aparece gran parte de la práctica. Para empezar, creé dos interfaces, printable y searchable, encargadas de obligar a la clase a crear métodos que permitan su impresión y su búsqueda, respectivamente, lo que se nos pide en la práctica. A continuación se muestran las interfaces:

Interface printable:

```typescript
1    export interface printable {
2      imprimir(): void;
3    }
```
Interface searchable:

```typescript
1    export interface searchable {
2      buscarArtista(artista: string): void;
3      buscarDisco(disco: string): void;
4      buscarCancion(cancion: string): void;
5    }
```

Para el constructor de la clase simplemente tenemos que pasar una colección de Artista, ya que toda la información relacionada a los discos y a las canciones se encuentra dentro de cada una de las instancias de la clase Artista. Por lo tanto, el constructor de la clase BibliotecaMusical es el siguiente:

```typescript
1    constructor(private artistas: Artista[]) {
2    }
```

Para esta clase también creo un getter que devuelva este atributo y así poder leerlo en cualquier caso:

```typescript
1    get getArtistas(): Artista[] {
2      return this.artistas;
3    }
```

Lo primero que tuve que hacer fue implementar los métodos de la interface printable, que en este caso es solo uno, el que permite imprimir en forma de tabla la información de la biblioteca musical:

Para ello simplemente se hace una llamada a la función console.table, que permite imprimir en forma de tabla la información que se le pasa por parámetro, en este caso la colección de artistas que contiene la biblioteca musical.
```typescript
1    imprimir(): void {
2      console.log("Artistas:");
3      console.table(this.artistas);
4    }
```
A continuación se muestran los métodos de la interface searchable, que son tres, uno para buscar un artista, otro para buscar un disco y otro para buscar una canción:


El primer método almacena en un vector (infoArtista) la información de los artistas que coincidan con el nombre que se le pasa por parámetro, para ello se hace uso de la función filter, que permite filtrar los elementos de un vector que cumplan una condición, en este caso que el nombre del artista coincida con el nombre que se le pasa por parámetro. Una vez se tiene el vector con la información de los artistas que coinciden con el nombre que se le pasa por parámetro, se imprime en forma de tabla la información de ese vector. También se hace uso de la función toLowerCase, que permite convertir un string a minúsculas, para que la búsqueda sea insensible a mayúsculas o minúsculas y a la función includes, que permite comprobar si un string contiene a otro string, para así poder buscar por partes del nombre del artista.
```typescript
1    buscarArtista(artista: string): void {
2      const infoArtista = this.artistas.filter((artistaFiltrado) => artistaFiltrado.getNombre.toLowerCase().includes(artista.toLowerCase()));
3      console.table(infoArtista);
4    }
```

Lo mismo sucede con la función buscarDisco, la cual almacena en un vector la información relacionada a un disco en concreto, también se hace una llamada a la función toLowerCase y a la función includes. La diferencia con el método anterior es que en este caso se hace uso de la función map, que permite mapear los elementos de un vector, en este caso se mapean los artistas y se filtran los discos que coincidan con el nombre que se le pasa por parámetro, para luego aplanar el vector gracias a la función flat y obtener un vector con la información de los discos que coinciden con el nombre que se le pasa por parámetro. Una vez se tiene el vector con la información de los discos que coinciden con el nombre que se le pasa por parámetro, se imprime en forma de tabla la información de ese vector.
```typescript
1    buscarDisco(disco: string): void {
2      const infoDisco = this.artistas.map((artistaFiltrado) => artistaFiltrado.getDiscografia.filter((discoFiltrado) => 
3      discoFiltrado.getNombre.toLowerCase().includes(disco.toLowerCase()))).flat();
4      console.table(infoDisco);
5    }
```

Y por último, el método que permite buscar una canción, el cual almacena en un vector la información relacionada a una canción en concreto, también se hace una llamada a la función toLowerCase y a la función includes. La diferencia con el método anterior es que en este caso se hace uso de la función map, que permite mapear los elementos de un vector, en este caso se mapean los artistas y se filtran los discos y luego se filtran las canciones que coincidan con el nombre que se le pasa por parámetro, para luego aplanar el vector gracias a la función flat y obtener un vector con la información de las canciones que coinciden con el nombre que se le pasa por parámetro. Una vez se tiene el vector con la información de las canciones que coinciden con el nombre que se le pasa por parámetro, se imprime en forma de tabla la información de ese vector.
```typescript
1    buscarCancion(cancion: string): void {
2      const infoCancion = this.artistas.map((artistaFiltrado) => artistaFiltrado.getDiscografia.map((discoFiltrado) => 
3      discoFiltrado.getCanciones.filter((cancionFiltrada) => cancionFiltrada.getNombre.toLowerCase().includes(cancion.toLowerCase())))).flat().flat();
4      console.table(infoCancion);
5    }
```

Para las anteriores funciones hay que tener en cuenta que por ejemplo, si dos artistas tienen el mismo disco en su colección de discos se imprimirá dos veces la información de ese disco, ya que no sabemos si esos dos discos se pueden llamar igual o incluso es un disco en colaboración con los dos artistas.


Para la última parte de este ejercicio implementé tres funciones que me permiten sacar información adicional:

La primera función permite sacar el número de canciones que hay incluidas en la biblioteca musical, para ello creo un vector que almacena cada una de las canciones de cada disco de cada artista gracias a la función map, que va recorriendo cada uno de los elementos de la colección de discos de un artista. A continuación se utiliza la misma metodología que en las funciones anteriores, se filtra por el nombre pasado por parámetro y se hace uso de las funciones toLowerCase y la función includes. Luego se devuelve el número de canciones que hay en ese vector, o lo que es lo mismo, su longitud.
```typescript
  getNumeroCanciones(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.getDiscografia.filter((discoFiltrado) => 
    discoFiltrado.getNombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    return vectorCanciones[0].getCanciones.length;
  }
```


Para la siguiente función se hace lo mismo que en la anterior, se crea un vector que almacena cada una de las canciones de cada disco de cada artista gracias a la función map, que va recorriendo cada uno de los elementos de la colección de discos de un artista. A continuación se utiliza la misma metodología que en las funciones anteriores, se filtra por el nombre pasado por parámetro y se hace uso de las funciones toLowerCase y la función includes. Luego se devuelve la duración total del disco, para ello se hace uso de la función reduce, que permite reducir un vector a un único valor, en este caso se reduce a un número que es la suma de las duraciones de cada canción.
```typescript
  getDuracionDisco(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.getDiscografia.filter((discoFiltrado) => 
    discoFiltrado.getNombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    return vectorCanciones[0].getCanciones.reduce((acumulador, cancion) => acumulador + cancion.getDuracion, 0);
  }
```

Por último, la última función que he implementado permite sacar el número de reproducciones que tiene un disco, para ello se hace lo mismo que en las funciones anteriores, se crea un vector que almacena cada una de las canciones de cada disco de cada artista gracias a la función map, que va recorriendo cada uno de los elementos de la colección de discos de un artista. A continuación se utiliza la misma metodología que en las funciones anteriores, se filtra por el nombre pasado por parámetro y se hace uso de las funciones toLowerCase y la función includes. Luego se devuelve el número de reproducciones que tiene el disco, para ello se hace uso de la función reduce, que permite reducir un vector a un único valor, en este caso se reduce a un número que es la suma de las reproducciones de cada canción.
```typescript
  getReproduccionesDisco(nombreDisco: string): number {
    const vectorCanciones = this.artistas.map((artistaFiltrado) => artistaFiltrado.getDiscografia.filter((discoFiltrado) => 
    discoFiltrado.getNombre.toLowerCase().includes(nombreDisco.toLowerCase()))).flat();
    return vectorCanciones[0].getCanciones.reduce((acumulador, cancion) => acumulador + cancion.getReproducciones, 0);
  }
```

Y con esto habríamos acabado la implementación de este ejercicio.

### Modificación : Arithmeticable Collection

Para la realización de este ejercicio tuve que crear una interfaz genérica para que cualquier dato se vea obligado a implementar estos métodos.

```typescript
export interface Arithmeticable<T> {
  add(op: T): T;
  substract(op: T): T;
  multiply(op: T): T;
  divide(op: T): T;
}
```

A continuación se crea una clase genérica que implementa la interfaz anterior, por lo que todos los elementos que se metan en esta colección deben tener implementados los cuatro métodos que realizan operaciones aritméticas.

```typescript
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  constructor (private coleccion: T[]) {}
```

A continuación añadimos los métodos que nos permiten añadir un elemento a la colección, obtener un elemento de la colección y obtener el número de elementos que hay en la colección.

```typescript
  addArithmeticable(elemento: T) {
    this.coleccion.push(elemento);
    return elemento; 
  }
  getArithmeticable(indice: number): T {
    return this.coleccion[indice];
  }
  getNumberOfArithmeticables(): number {
    return this.coleccion.length;
  }
}
```

A continuación aparece la clase Complex que implementa la interfaz Arithmeticable, por lo que tiene que implementar los cuatro métodos que realizan operaciones aritméticas.

Las instancias de esta clase reciben dos parámetros, el primero es el número real y el segundo es el número imaginario.
```typescript
export class Complex implements Arithmeticable<Complex> {
  constructor (private real: number, private imaginaria: number) {}
```

A continuación se implementan los cuatro métodos que realizan operaciones aritméticas, para ello se hace uso de las fórmulas que vienen establecidas.

```typescript
  add(op: Complex): Complex {
    return new Complex(this.real + op.real, this.imaginaria + op.imaginaria);
  }
  substract(op: Complex): Complex {
    return new Complex(this.real - op.real, this.imaginaria - op.imaginaria);
  }
  multiply(op: Complex): Complex {
    return new Complex(this.real * op.real - this.imaginaria * op.imaginaria, this.real * op.imaginaria + this.imaginaria * op.real);
  }
  divide(op: Complex): Complex {
    return new Complex((this.real * op.real + this.imaginaria * op.imaginaria) / (op.real * op.real + op.imaginaria * op.imaginaria), 
    (this.imaginaria * op.real - this.real * op.imaginaria) / (op.real * op.real + op.imaginaria * op.imaginaria));
  }
}
```

Lo mismo ocurre con la clase Rational, lo que esta vez recibe dos parámetros, el numerador y el denominador.

```typescript
export class Rational implements Arithmeticable<Rational> {
  constructor (private numerador: number, private denominador: number) {}
```

También se deben implementar los cuatro métodos que realizan operaciones aritméticas, para ello se hace uso de las fórmulas que vienen establecidas.

```typescript
  add(op: Rational): Rational {
    return new Rational((this.numerador * op.denominador) + (this.denominador * op.numerador), this.denominador * op.denominador);
  }
  substract(op: Rational): Rational {
    return new Rational((this.numerador * op.denominador) - (this.denominador * op.numerador), this.denominador * op.denominador);
  }
  multiply(op: Rational): Rational {
    return new Rational(this.numerador * op.numerador, this.denominador * op.denominador);
  }
  divide(op: Rational): Rational {
    return new Rational(this.numerador * op.denominador, this.denominador * op.numerador);
  }
}
```



### Conclusión

En conclusión puedo decir que tanto las clases genéricas como las interfaces genéricas me parecen unas herramientas muy útiles para el desarrollo, ya que nos permiten crear clases e interfaces que pueden ser utilizadas por cualquier tipo de dato, por otro lado hay que tener mucho cuidado con los tipos de datos que se utilizan ya que, por ejemplo, la suma no tiene la misma definición para todos los tipos de datos, en los number se trata de una suma aritmética y en las string se trata de una concatenación. También me parece muy útil Istanbul y Coveralls ya que nos permiten saber qué tan seguro es nuestro código y qué tan bien está cubierto por los test.

### Bibliografía

[Definición de clases genéricas](https://desarrolloweb.com/articulos/generics-typescript.html)

[Otro artículo sobre genéricos](https://learn.microsoft.com/es-es/training/modules/typescript-generics/)

[Cómo funciona Istanbul](https://istanbul.js.org/)

