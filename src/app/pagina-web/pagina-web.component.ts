import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-pagina-web',
  templateUrl: './pagina-web.component.html',
  styleUrls: ['./pagina-web.component.css']
})
export class PaginaWebComponent implements OnInit{
  resultat: any;

  constructor(private s: ServeiService) {

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
