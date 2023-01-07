import { Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{
  list: string[][] | undefined;

  constructor(private s: ServeiService) {
  }

  ngOnInit(){
    let num=0
    localStorage.setItem('contador', num.toString())
    localStorage.setItem("lista", JSON.stringify(this.list))

  }

  toggle(event: Event): void {
    let contador=localStorage.getItem("contador")!;
    let lista=localStorage.getItem("lista")!;
    lista =JSON.parse(lista)
    let cont= +contador;
    let elementId: string = (event.target as Element).id;

    function copyDiv() {
      var firstDivContent;
      if (elementId=="p1"){
        firstDivContent = document.getElementById('producto1')!.innerHTML;
        for (var i=0; i<2; i++){
          if (i==0){
            // @ts-ignore
            lista[cont][i]=document.getElementById('nom1')!.innerHTML
          } else if (i==1){
            // @ts-ignore
            lista[cont][i]=document.getElementById('envio1')!.innerHTML
          } else if (i==2){
            // @ts-ignore
            lista[cont][i]=document.getElementById('precio1')!.innerHTML
          }
        }
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

    console.log(lista)
    cont++;
    localStorage.setItem('contador', cont.toString())
    this.s.copiar(copyDiv())
    console.log(contador)
  }



}
