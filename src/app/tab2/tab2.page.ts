import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';

  constructor() {}

  buscar(event) {
    const valor = event.detail.value;
    console.log(valor);
  }

}
