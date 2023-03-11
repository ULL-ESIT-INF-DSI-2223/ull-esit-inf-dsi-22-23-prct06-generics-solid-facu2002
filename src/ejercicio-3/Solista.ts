import { Artista } from "./Artista";
import { Discografia } from "./Discografia";
import { Disco } from "./Disco";


export class Solista extends Artista {
  /**
   * Constructor de la clase Solista
   * @param nombreSolista nombre del solista
   * @param oyentesSolista número de oyentes del solista
   * @param discografiaSolista discografia del solista
   */
  constructor(private nombreSolista: string, private oyentesSolista: number, private discografiaSolista: Discografia<Disco>) {
    super(nombreSolista, oyentesSolista, discografiaSolista);
  }

  /**
   * Getter del nombre del solista
   */
  get Nombre(): string {
    return this.nombreSolista;
  }

  /**
   * Getter de la discografia del solista
   */
  get Oyentes(): number {
    return this.oyentesSolista;
  }

  /**
   * Getter del número de oyentes del solista
   */
  get Discografia(): Discografia<Disco> {
    return this.discografiaSolista;
  }
}