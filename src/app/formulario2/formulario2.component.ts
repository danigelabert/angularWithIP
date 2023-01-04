import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit{
  usuari: any;
  password:any;

  constructor(private router: Router, private s: ServeiService) {
  }

  ngOnInit() {

  }

  valorLogIn($myParam: string = ''): void{
    const nav: string[] = ['/formulario']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav)
    console.log(this.usuari+" "+this.password)
    this.s.setNom(this.usuari, this.password)
  }
}
