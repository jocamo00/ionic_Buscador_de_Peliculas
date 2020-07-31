import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  upcomingMovies: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor( private moviesService: MoviesService ) {}

  ngOnInit() {
    this.moviesService.getUpcoming()
    .subscribe( resp => {
      console.log('Resp', resp);
      this.upcomingMovies = resp.results;
    });
  }

}
