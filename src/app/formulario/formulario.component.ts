import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  correu: any;
  nombre:any;

  constructor(private router: Router, private http: HttpClient) {

  }
  ngOnInit() {
  }
  formularioEnviado(){
    var resultat: Object =false;
    let req = new HttpParams().set('email',this.correu);
    let req2 = new HttpParams().set('name',this.nombre);
    this.http.get("http://localhost:4080/inicisessio", {params: req}).subscribe((client)=>{
      resultat=client;
      console.log(resultat);
      if(resultat==true){
        this.http.get("http://localhost:4080/contrasenya", {params: req2}).subscribe((client)=> {
          resultat = client;
          console.log(resultat);
          if (resultat == true) {
            alert("TOT CORRECTE")
          }else
            alert("Contrasenya incorrecte.")
        })

      }else{
        alert("Este correo no existe, introduce de nuevo tu correo")
      }
    })
  }
}
