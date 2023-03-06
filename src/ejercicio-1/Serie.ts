

export class Serie {
  constructor(private nombre: string, private año: number, private genero: string[], private numeroTemporadas: number) {}
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
}