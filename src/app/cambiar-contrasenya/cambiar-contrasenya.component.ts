import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cambiar-contrasenya',
  templateUrl: './cambiar-contrasenya.component.html',
  styleUrls: ['./cambiar-contrasenya.component.css']
})
export class CambiarContrasenyaComponent {
  correu:any;
  password:any;
  password2:any;
  constructor(private router: Router) {
  }

  enviar($myParam: string = ''){
    const nav: string[] = ['/formulario']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav);
    alert("Contraseña cambiada correctamente!")
  }
}
