import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getUpcoming() {

    return this.http.get(`${URL}/movie/upcoming?api_key=${apiKey}&language=es&page=1&region=es`);

  }
}
