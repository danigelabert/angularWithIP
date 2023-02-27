import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.component.html',
  styleUrls: ['./restaurar.component.css']
})
export class RestaurarComponent {
  correu: any;
  nombre:any;

  constructor(private http: HttpClient) {
  }

  enviar(){
    this.http.post("http://localhost:4080/api/sendemail", {name: this.nombre, email: this.correu}).subscribe((client ) =>{
      console.log(client);

    })
    alert("Se ha enviado un correo para modificar tu contraseña")
  }
}
