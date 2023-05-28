import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPeliculasComponent } from './components/padre-seccion/inicio-peliculas.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescripcionPeliculaComponent } from './components/descripcion-pelicula/descripcion-pelicula.component';
import { SeccionComponentesComponent } from './components/hijo-seccion/seccion-componentes.component';
import { SeccionPeliculasComponent } from './components/padre-peliculas/seccion-peliculas.component';
import { PeliculasPorSeccionComponent } from './components/hijo-peliculas/peliculas-por-seccion.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioPeliculasComponent,
    NavComponent,
    FooterComponent,
    DescripcionPeliculaComponent,
    SeccionComponentesComponent,
    SeccionPeliculasComponent,
    PeliculasPorSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
