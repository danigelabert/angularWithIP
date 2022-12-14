import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  email: any;
  password:any;

  constructor() {
  }

  ngOnInit() {

  }

  valorLogIn(){
    console.log(this.email+" "+this.password)
  }
}
