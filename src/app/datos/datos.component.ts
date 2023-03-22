import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  correo=localStorage.getItem('correo')
  username:any;
  contrasena:any;

  constructor(private http: HttpClient) {
    console.log(this.correo)
    // @ts-ignore
    let req = new HttpParams().set('email',this.correo);
    this.http.get("http://172.16.9.1:4080/api/nombre", {params: req}).subscribe((nom)=> {
      //@ts-ignore
      this.username = nom.Usuari;
      //@ts-ignore
      this.contrasena = nom.contrasenya
    })
  }
}
