import { Artista } from "./Artista";
import { Discografia } from "./Discografia";
import { Disco } from "./Disco";


/**
 * Clase Grupo
 */
export class Grupo extends Artista {
  /**
   * Constructor de la clase Grupo
   * @param nombreGrupo nombre del grupo
   * @param oyentesGrupo número de oyentes del grupo
   * @param discografiaGrupo discografia del grupo
   */
  constructor(private nombreGrupo: string, private oyentesGrupo: number, private discografiaGrupo: Discografia<Disco>) {
    super(nombreGrupo, oyentesGrupo, discografiaGrupo);
  }

  /**
   * Getter del nombre del grupo
   */
  get Nombre(): string {
    return this.nombreGrupo;
  }

  /**
   * Getter de la discografia del grupo
   */
  get Discografia(): Discografia<Disco> {
    return this.discografiaGrupo;
  }

  /**
   * Getter del número de oyentes del grupo
   */
  get Oyentes(): number {
    return this.oyentesGrupo;
  }
}