import { Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{
  public firstDivContent:any;

  constructor(private s: ServeiService) {
  }

  ngOnInit(){

  }

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    console.log(elementId)
    function copyDiv() {
      var firstDivContent;
      if (elementId=="p1"){
        firstDivContent = document.getElementById('producto1')!.innerHTML;
      } else if (elementId=="p2"){
        firstDivContent = document.getElementById('producto2')!.innerHTML;
      } else if (elementId=="p3"){
        firstDivContent = document.getElementById('producto3')!.innerHTML;
      } else if (elementId=="p4"){
        firstDivContent = document.getElementById('producto4')!.innerHTML;
      } else if (elementId=="p5"){
        firstDivContent = document.getElementById('producto5')!.innerHTML;
      } else if (elementId=="p6"){
        firstDivContent = document.getElementById('producto6')!.innerHTML;
      }
      return firstDivContent;
    }
    this.s.copiar(copyDiv())
  }



}
