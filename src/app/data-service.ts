import { Pelicula } from './pelicula.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}
  url = 'http://localhost:8080/peliculasYSeries/webservice/peliculas';

  // tslint:disable-next-line: typedef
  cargarPeliculas(){
    return this.httpClient.get(this.url);
  }

  // tslint:disable-next-line: typedef
  agregarPelicula(pelicula: Pelicula){
    return this.httpClient.post(this.url,pelicula);
  }

  // tslint:disable-next-line: typedef
  modificarPelicula(idPelicula: number, pelicula: Pelicula){
    let urlMP: string;
    urlMP = this.url + '/' + idPelicula;
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
    urlEL = this.url + '/' + idPelicula;
    this.httpClient.delete(urlEL).subscribe(
      (response) => {
        console.log('mensaje de eliminacion: ' + response);
      },
      (error) => console.log('no se elimino la pelicula: ' + error)
    );
  }
}


