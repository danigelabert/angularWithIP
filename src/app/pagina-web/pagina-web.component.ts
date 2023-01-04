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
    const nombre=this.s.getUser()
    const c=undefined
    if (nombre==c){
      console.log("no esta")
    } else {
      let boton=document.getElementById("redondo")!;
      boton.style.backgroundImage="none"
      boton.style.borderTopRightRadius="0px"
      boton.style.borderBottomRightRadius="0px"
      boton.style.borderBottomLeftRadius="15px"
      boton.style.borderTopLeftRadius="15px"
      boton.style.width="85px"
      boton.style.marginTop="20%"
      boton.style.marginLeft="5%"
      boton.style.backgroundColor="#9a9a9a"
      this.resultat=nombre
      let mostrar=document.getElementById("logout")!;
      mostrar.style.visibility="visible"
    }
  }
  borrar(){
    console.log("hola")
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
  }
}
