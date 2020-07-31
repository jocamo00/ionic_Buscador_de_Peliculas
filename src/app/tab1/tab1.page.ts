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
  popularMovies: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor( private moviesService: MoviesService ) {}

  ngOnInit() {
    this.getUpcoming();
    this.getpopular();
  }

  getUpcoming() {
    this.moviesService.getUpcoming()
    .subscribe( resp => {
      this.upcomingMovies = resp.results;
    });
  }

  getpopular() {
    this.moviesService.getPopular()
    .subscribe( resp => {
      console.log('populares', resp);
      this.popularMovies = resp.results;
    });
  }

}
