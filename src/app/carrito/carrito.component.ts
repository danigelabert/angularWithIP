import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  compra:any;
  constructor(private s: ServeiService) {
  }
  ngOnInit() {
    this.compra=this.s.pegar()
  }
}
