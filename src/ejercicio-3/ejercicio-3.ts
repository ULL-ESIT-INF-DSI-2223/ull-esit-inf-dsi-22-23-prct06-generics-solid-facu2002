// import { Discografia } from "./Discografia";
// import { Disco } from "./Disco";
// import { Single } from "./Single";
// import { Colaboracion } from "./Colaboracion";
// import { DiscoSingle } from "./DiscoSingle";
// import { DiscoMultiple } from "./DiscoMultiple";
// import { Solista } from "./Solista";
// import { Grupo } from "./Grupo";
// import { BibliotecaMusical } from "./BibliotecaMusical";

// const cancion1 = new Single("mar", 35, ["Pop", "Rock"], 100);
// const cancion2 = new Single("cielo", 36, ["Urbano", "Trap"], 101);

// const cancion3 = new Colaboracion("Cancion1", 35, ["Pop", "Rock"], 100);
// const cancion4 = new Colaboracion("Cancion2", 36, ["Urbano", "Trap"], 101);

// const disco1 = new DiscoSingle("Disco1", 2000, [cancion1]);
// const disco2 = new DiscoMultiple("Disco2", 2000, [cancion1, cancion2, cancion3, cancion4]);

// const discografia1 = new Discografia<Disco>([disco1, disco2]);

// const artista1 = new Solista("elsolo", 100000, discografia1);
// const artista2 = new Grupo("elgrupo", 100000, discografia1);

// const biblio = new BibliotecaMusical([artista1, artista2]);
// (biblio.imprimir());

// console.table(biblio.buscarArtista("po"));
// console.table(biblio.buscarDisco("1"));
// console.table(biblio.buscarCancion("e"));
// console.log(biblio.getNumeroCanciones("Discog2"));
// console.log(biblio.getDuracionDisco("Disco1"));
// console.log(biblio.getReproduccionesDisco("Disco1"));