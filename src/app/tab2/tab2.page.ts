import { Component } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  peliculas: Pelicula[] = [];

  constructor( private moviesService: MoviesService ) {}

  buscar(event) {
    const valor = event.detail.value;
    // console.log(valor);
    this.moviesService.searchMovies(valor)
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
