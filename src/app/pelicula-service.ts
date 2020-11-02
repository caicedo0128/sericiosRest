import { DataService } from './data-service';
import { Pelicula } from './pelicula.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PeliculaService {

  peliculas: Pelicula[] = [];

  constructor(private dataService: DataService){}

  // tslint:disable-next-line: typedef
  setPeliculas(peliculas: Pelicula[]){
    this.peliculas = peliculas;
  }

  // tslint:disable-next-line: typedef
  agregarPelicula(pelicula: Pelicula){
    console.log('pelicula a agregar: ' + pelicula.nombre);
    this.dataService.agregarPelicula(pelicula).subscribe(
      (pelicula: Pelicula) => {
        console.log('pelicula agregada: ' + pelicula.idPelicula + ' - ' + pelicula.nombre);
        this.peliculas.push(pelicula);
      }
    );
  }

  // tslint:disable-next-line: typedef
  encontrarPelicula(idPeliculaParam: number){
    const pelicula: Pelicula = this.peliculas.find(pelicula => pelicula.idPelicula == idPeliculaParam);
    console.log('pelicula encontrada: ' + pelicula.idPelicula + ' - ' + pelicula.nombre);
    return pelicula;
  }

  // tslint:disable-next-line: typedef
  modificarPelicula(idPeliculaParam: number, pelicula: Pelicula){
    console.log('pelicula modificada: ' + pelicula.idPelicula + ' - ' + pelicula.nombre);
    const peliculaModificada = this.peliculas.find(pelicula => pelicula.idPelicula == idPeliculaParam);
    peliculaModificada.idPelicula = pelicula.idPelicula;
    peliculaModificada.nombre = pelicula.nombre;
    peliculaModificada.anio = pelicula.anio;
    this.dataService.modificarPelicula(idPeliculaParam, pelicula);
  }

  // tslint:disable-next-line: typedef
  eliminarPelicula(idPeliculaParam: number){
    console.log('pelicula eliminada: ' + idPeliculaParam);
    const index = this.peliculas.findIndex(pelicula => pelicula.idPelicula == idPeliculaParam);
    this.peliculas.splice(index,1);
    this.dataService.eliminarPelicula(idPeliculaParam);
  }

  obtenerPeliculas(){
    return this.dataService.cargarPeliculas();
  }
}
