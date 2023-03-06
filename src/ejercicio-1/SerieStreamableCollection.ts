import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";

export class SerieStreamableCollection extends BasicStreamableCollection<Serie> {
  constructor(private series: Serie[]) {
    super(series)
  }
  buscarPorAño(año: number): Serie[] {
    return this.series.filter(serie => serie.Año === año);
  }
  buscarPorNombre(nombre: string): Serie[] {
    return this.series.filter(serie => serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
  buscarPorGenero(genero: string): Serie[] {
    return this.series.filter(serie => serie.Genero.includes(genero));
  }
  introducirElemento(elemento: Serie): Serie[] {
    this.series.push(elemento);
    return this.series;
  }
  quitarPorAño(año: number): Serie[] {
    this.series = this.series.filter(serie => serie.Año !== año);
    return this.series;
  }
  quitarPorNombre(nombre: string): Serie[] {
    this.series = this.series.filter(serie => !serie.Nombre.toLowerCase().includes(nombre.toLowerCase()));
    return this.series;
  }
  quitarPorGenero(genero: string): Serie[] {
    this.series = this.series.filter(serie => !serie.Genero.includes(genero));
    return this.series;
  }
}