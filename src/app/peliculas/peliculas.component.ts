import { PeliculaService } from './../pelicula-service';
import { Pelicula } from './../pelicula.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private  peliculaService: PeliculaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.peliculaService.obtenerPeliculas().subscribe(
      (peliculasOtenidas: Pelicula[]) => {
        this.peliculas = peliculasOtenidas;
        this.peliculaService.setPeliculas(this.peliculas);
        console.log('peliculas obtenidas: ' + this.peliculas);
      }
    );
  }

  // tslint:disable-next-line: typedef
  agregar(){
    console.log('se va agregar');
    this.router.navigate(['./peliculas/agregar']);
  }


}
