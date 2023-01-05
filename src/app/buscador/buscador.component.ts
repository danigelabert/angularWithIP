import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
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
