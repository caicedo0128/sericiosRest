import { Serie } from './serie.model';
import { DataService } from './data-service';
import { Injectable } from '@angular/core';

@Injectable()
export class SerieService {

  series: Serie[] = [];

  constructor(private dataService: DataService){}

  // tslint:disable-next-line: typedef
  setSeries(series: Serie[]){
    this.series = series;
  }

  // tslint:disable-next-line: typedef
  agregarSerie(serie: Serie){
    console.log('serie a agregar: ' + serie.nombre);
    this.dataService.agregarSerie(serie).subscribe(
      (serie: Serie) => {
        console.log('serie agregada: ' + serie.idSerie + ' - ' + serie.nombre);
        this.series.push(serie);
      }
    );
  }

  // tslint:disable-next-line: typedef
  encontrarSerie(idSerieParam: number){
    const serie: Serie = this.series.find(serie => serie.idSerie == idSerieParam);
    console.log('serie encontrada: ' + serie.idSerie + ' - ' + serie.nombre);
    return serie;
  }

  // tslint:disable-next-line: typedef
  modificarSerie(idSerieParam: number, serie: Serie){
    console.log('serie modificada: ' + serie.idSerie + ' - ' + serie.nombre);
    const serieModificada = this.series.find(serie => serie.idSerie == idSerieParam);
    serieModificada.idSerie = serie.idSerie;
    serieModificada.nombre = serie.nombre;
    serieModificada.anio = serie.anio;
    this.dataService.modificarSerie(idSerieParam, serie);
  }

  // tslint:disable-next-line: typedef
  eliminarSerie(idSerieParam: number){
    console.log('serie eliminada: ' + idSerieParam);
    const index = this.series.findIndex(serie => serie.idSerie == idSerieParam);
    this.series.splice(index,1);
    this.dataService.eliminarSerie(idSerieParam);
  }

  obtenerSeries(){
    return this.dataService.cargarSeries();
  }
}
