import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit{
  usuari: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http:HttpClient) {
    // this.correu= {
    //   Usuari: this.usuari,
    //   contrasenya: this.email,
    //   email: this.email
    // }
  }

  ngOnInit() {

  }

  formularioEnviado(): void{
    this.http.post<any>("http://localhost:4080/registre", {user: this.usuari,
      password: this.password,
      email: this.email}).subscribe();
    console.log(this.usuari,
       this.password,
       this.email)

  }
}
