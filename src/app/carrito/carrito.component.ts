import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  preu:any;
  constructor(private router: Router) {
  }
  ngOnInit() {
    const subject = document.querySelector('#subject')!;
    if (localStorage.getItem("producto1")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto1")!);
    }
    if ( localStorage.getItem("producto2")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto2")!);
    }
    if ( localStorage.getItem("producto3")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto3")!);
    }
    if ( localStorage.getItem("producto4")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto4")!);
    }
    if (localStorage.getItem("producto5")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto5")!);
    }
    if ( localStorage.getItem("producto6")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto6")!);
    }
    if (localStorage.getItem('preu')==null){

    } else {
      this.preu=localStorage.getItem('preu')+"€"
    }
  }
  borrar(){
    window.localStorage.clear()
    window.location.reload();
  }
}
