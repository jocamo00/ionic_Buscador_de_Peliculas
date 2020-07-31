import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  upcomingMovies: Pelicula[] = [];
  popularMovies: Pelicula[] = [];
  topRatedMovies: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController ) {}

  ngOnInit() {
    this.getUpcoming();
    this.getpopular();
    this.getTopRated();
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
      this.popularMovies = resp.results;
    });
  }

  getTopRated() {
    this.moviesService.getTopRated()
    .subscribe( resp => {
      this.topRatedMovies = resp.results;
    });
  }

  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
