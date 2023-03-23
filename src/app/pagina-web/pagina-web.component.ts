import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-pagina-web',
  templateUrl: './pagina-web.component.html',
  styleUrls: ['./pagina-web.component.css']
})
export class PaginaWebComponent implements OnInit{
  resultat: any;
  imatges: any[];

  constructor(private s: ServeiService) {
    const slider = {
      foto1: "http://localhost:4080/images/slider/foto1",
      foto2: "http://localhost:4080/images/slider/foto2",
      foto3: "http://localhost:4080/images/slider/foto3",
      foto4: "http://localhost:4080/images/slider/foto4"
    };
    this.imatges = [];
    this.imatges.push(slider);
  }

  ngOnInit() {
    const nombre= localStorage.getItem("nombre")
    const c=undefined
    if (nombre==c){
    } else {
      let boton=document.getElementById("redondo")!;
      boton.style.visibility="hidden"
      let lin=document.getElementById("link")!;
      lin.style.marginTop="18%"
      this.resultat=nombre
      let mostrar=document.getElementById("logout")!;
      mostrar.style.visibility="visible"
      mostrar.style.cursor="pointer"
    }
  }
  borrar(){
    window.localStorage.clear()
    const nombre=this.s.getUser()
    this.resultat=nombre
    let mostrar=document.getElementById("logout")!;
    mostrar.style.visibility="hidden"
    let boton=document.getElementById("redondo")!;
    boton.style.backgroundImage="url(../../assets/login.png)"
    boton.style.borderRadius="50px"
    boton.style.width="50px"
    boton.style.marginLeft="50%"
    boton.style.marginTop="35%"
    boton.style.backgroundColor="white"
    boton.style.visibility="visible"
    let lin=document.getElementById("link")!;
    lin.style.marginTop="0"
  }
}
