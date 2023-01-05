import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{
  public firstDivContent: any;
  constructor(private s: ServeiService) {
  }

  ngOnInit(){

  }
  datos(){
    // @ts-ignore
    this.s.toggle()
  }
  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    console.log(elementId)
    function copyDiv() {
      if (elementId=="p1"){
        firstDivContent = document.getElementById('producto1')!;
        var secondDivContent = document.getElementById('producto2')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
        this.s.copiar()
      } else if (elementId=="p2"){
        var firstDivContent = document.getElementById('producto2')!;
        var secondDivContent = document.getElementById('producto1')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
      } else if (elementId=="p3"){
        var firstDivContent = document.getElementById('producto3')!;
        var secondDivContent = document.getElementById('DONDE SE VA A COPIAR')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
      } else if (elementId=="p4"){
        var firstDivContent = document.getElementById('producto4')!;
        var secondDivContent = document.getElementById('DONDE SE VA A COPIAR')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
      } else if (elementId=="p5"){
        var firstDivContent = document.getElementById('producto5')!;
        var secondDivContent = document.getElementById('DONDE SE VA A COPIAR')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
      } else if (elementId=="p6"){
        var firstDivContent = document.getElementById('producto6')!;
        var secondDivContent = document.getElementById('DONDE SE VA A COPIAR')!;
        secondDivContent.innerHTML = firstDivContent.innerHTML;
      }

        }
    copyDiv()
  }


}
