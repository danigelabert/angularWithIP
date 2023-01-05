import { Component } from '@angular/core';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent {
  constructor() {

  }

  afegir(clicked_id: any){
    alert(clicked_id);
  }
}
