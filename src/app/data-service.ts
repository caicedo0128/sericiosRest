import { Serie } from './serie.model';
import { Pelicula } from './pelicula.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}
  urlP = 'http://localhost:8080/peliculasYSeries/webservice/peliculas';
  urlS = 'http://localhost:8080/peliculasYSeries/webservice/series';

  /*
  METODOS PARA PELICULAS
  */

  // tslint:disable-next-line: typedef
  cargarPeliculas(){
    return this.httpClient.get(this.urlP);
  }

  // tslint:disable-next-line: typedef
  agregarPelicula(pelicula: Pelicula){
    return this.httpClient.post(this.urlP, pelicula);
  }

  // tslint:disable-next-line: typedef
  modificarPelicula(idPelicula: number, pelicula: Pelicula){
    let urlMP: string;
    urlMP = this.urlP + '/' + idPelicula;
    this.httpClient.put(urlMP, pelicula).subscribe(
      (response) => {
        console.log('mensaje de modificacion: ' + response);
      },
      (error) => console.log('no se modifico la pelicula: ' + error)
    );
  }

  // tslint:disable-next-line: typedef
  eliminarPelicula(idPelicula: number){
    let urlEL: string;
    urlEL = this.urlP + '/' + idPelicula;
    this.httpClient.delete(urlEL).subscribe(
      (response) => {
        console.log('mensaje de eliminacion: ' + response);
      },
      (error) => console.log('no se elimino la pelicula: ' + error)
    );
  }

  /*
  METODOS PARA SERIES
  */

  // tslint:disable-next-line: typedef
  cargarSeries(){
    return this.httpClient.get(this.urlS);
  }

  // tslint:disable-next-line: typedef
  agregarSerie(serie: Serie){
    return this.httpClient.post(this.urlS, serie);
  }

  // tslint:disable-next-line: typedef
  modificarSerie(idSerie: number, serie: Serie){
    let urlMP: string;
    urlMP = this.urlS + '/' + idSerie;
    this.httpClient.put(urlMP, serie).subscribe(
      (response) => {
        console.log('mensaje de modificacion: ' + response);
      },
      (error) => console.log('no se modifico la serie: ' + error)
    );
  }

  // tslint:disable-next-line: typedef
  eliminarSerie(idSerie: number){
    let urlEL: string;
    urlEL = this.urlS + '/' + idSerie;
    this.httpClient.delete(urlEL).subscribe(
      (response) => {
        console.log('mensaje de eliminacion: ' + response);
      },
      (error) => console.log('no se elimino la serie: ' + error)
    );
  }
}


