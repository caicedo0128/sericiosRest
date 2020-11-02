import { SerieService } from './serie-service';
import { DataService } from './data-service';
import { PeliculaService } from './pelicula-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from './series/series.component';
import { FormularioSerieComponent } from './formulario-serie/formulario-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FormularioPeliculaComponent,
    SeriesComponent,
    FormularioSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PeliculaService, DataService, SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
