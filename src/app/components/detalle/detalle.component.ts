import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: 0
  };

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController ) { }

  ngOnInit() {

    this.getMovieDetail();
    this.getActorsMovies();
  }

  getMovieDetail() {
    this.moviesService.getMovieDetail( this.id )
      .subscribe( resp => {
        this.pelicula = resp;
      });
  }

  getActorsMovies() {
    this.moviesService.getActorsMovies( this.id )
      .subscribe( resp => {
        this.actores = resp.cast;
      });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
