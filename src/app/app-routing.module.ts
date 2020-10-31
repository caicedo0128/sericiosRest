import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  {path: '', component: PeliculasComponent},
  {path: 'peliculas', component: PeliculasComponent, children: [
    {path: 'agregar', component: FormularioPeliculaComponent},
    {path: ':idPelicula', component: FormularioPeliculaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
