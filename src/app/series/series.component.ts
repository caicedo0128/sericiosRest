import { Serie } from './../serie.model';
import { SerieService } from './../serie-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor(private  serieService: SerieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.serieService.obtenerSeries().subscribe(
      (seriesOtenidas: Serie[]) => {
        this.series = seriesOtenidas;
        this.serieService.setSeries(this.series);
        console.log('series obtenidas: ' + this.series);
      }
    );
  }

  // tslint:disable-next-line: typedef
  agregar(){
    console.log('se va agregar');
    this.router.navigate(['./series/agregar']);
  }


}
