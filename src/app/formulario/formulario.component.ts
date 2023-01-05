import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  usuari: any;
  password:any;

  constructor(private router: Router, private s: ServeiService) {
  }
  ngOnInit() {
  }
  valorLogIn($myParam: string = ''){
    var usr=this.s.getUser()
    var pasw=this.s.getPassword()
    if (usr==this.usuari && pasw==this.password){
      const nav: string[] = ['/pagina-web']
      if($myParam.length) {
        nav.push($myParam);
      }
      this.router.navigate(nav)
    }
    console.log(this.usuari+" "+this.password)
  }
}
