import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  oculto = 150;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {

    this.getMovieDetail();
  }

  getMovieDetail() {
    this.moviesService.getMovieDetail( this.id )
      .subscribe( resp => {
        console.log(resp);
        this.pelicula = resp;
      });
  }

}
