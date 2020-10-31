import { PeliculaService } from './../pelicula-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../pelicula.model';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
})
export class FormularioPeliculaComponent implements OnInit {

  nombreInput: string;
  idPelicula: number;
  anioInput: string;

  constructor(private peliculaService: PeliculaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPelicula = this.route.snapshot.params.idPelicula;
    console.log('recupera el parametro idPelicula:' + this.idPelicula);
    if(this.idPelicula != null){
      const pelicula  = this.peliculaService.encontrarPelicula(this.idPelicula);
      if(pelicula != null){
        this.nombreInput = pelicula.nombre;
      }
    }
  }

  // tslint:disable-next-line: typedef
  guardarPelicula(){
    const pelicula = new Pelicula(this.idPelicula, this.nombreInput, this.anioInput);
    if(this.idPelicula != null){
      this.peliculaService.modificarPelicula(this.idPelicula,pelicula);
    }else{
      this.peliculaService.agregarPelicula(pelicula);
      this.router.navigate(['peliculas']);
    }
  }

  // tslint:disable-next-line: typedef
  eliminarPelicula(){
    if (this.idPelicula != null){
      console.log('pelicula eliminada: ' + this.idPelicula);
      this.peliculaService.eliminarPelicula(this.idPelicula);
    }
    this.router.navigate(['peliculas']);
  }

}
