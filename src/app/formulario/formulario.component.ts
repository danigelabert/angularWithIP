import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  email: any;
  password:any;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  valorLogIn($myParam: string = ''): void{
    const nav: string[] = ['/pagina-web']
    if($myParam.length) {
      nav.push($myParam);
    }
    this.router.navigate(nav)
    console.log(this.email+" "+this.password)
  }
}
