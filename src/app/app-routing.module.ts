import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';
import { FormularioSerieComponent } from './formulario-serie/formulario-serie.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path: '', component: PeliculasComponent},
  {path: 'peliculas', component: PeliculasComponent, children: [
    {path: 'agregar', component: FormularioPeliculaComponent},
    {path: ':idPelicula', component: FormularioPeliculaComponent}
  ]},
  {path: '', component: SeriesComponent},
  {path: 'series', component: SeriesComponent, children: [
    {path: 'agregar', component: FormularioSerieComponent},
    {path: ':idSerie', component: FormularioSerieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
