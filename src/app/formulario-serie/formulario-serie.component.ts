import { Serie } from './../serie.model';
import { SerieService } from './../serie-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-serie',
  templateUrl: './formulario-serie.component.html'
})
export class FormularioSerieComponent implements OnInit {

  nombreInput: string;
  idSerie: number;
  anioInput: string;

  constructor(private serieService: SerieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idSerie = this.route.snapshot.params.idSerie;
    console.log('recupera el parametro idSerie:' + this.idSerie);
    if (this.idSerie != null){
      const serie  = this.serieService.encontrarSerie(this.idSerie);
      if (serie != null){
        this.nombreInput = serie.nombre;
      }
    }
  }

  // tslint:disable-next-line: typedef
  guardarSerie(){
    const serie = new Serie(this.idSerie, this.nombreInput, this.anioInput);
    if (this.idSerie != null){
      this.serieService.modificarSerie(this.idSerie, serie);
    }else{
      this.serieService.agregarSerie(serie);
      this.router.navigate(['series']);
    }
  }

  // tslint:disable-next-line: typedef
  eliminarSerie(){
    if (this.idSerie != null){
      console.log('serie eliminada: ' + this.idSerie);
      this.serieService.eliminarSerie(this.idSerie);
    }
    this.router.navigate(['series']);
  }

}
