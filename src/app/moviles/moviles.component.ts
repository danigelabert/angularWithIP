import { Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{

  constructor() {
  }

  ngOnInit(){
  }

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
      if (elementId=="p1"){
        localStorage.setItem("producto1", document.getElementById('producto1')!.innerHTML)
      } else if (elementId=="p2"){
        localStorage.setItem("producto2", document.getElementById('producto2')!.innerHTML)
      } else if (elementId=="p3"){
        localStorage.setItem("producto3", document.getElementById('producto3')!.innerHTML)
      } else if (elementId=="p4"){
        localStorage.setItem("producto4", document.getElementById('producto4')!.innerHTML)
      } else if (elementId=="p5"){
        localStorage.setItem("producto5", document.getElementById('producto5')!.innerHTML)
      } else if (elementId=="p6"){
        localStorage.setItem("producto6", document.getElementById('producto6')!.innerHTML)
      }
    }
}
