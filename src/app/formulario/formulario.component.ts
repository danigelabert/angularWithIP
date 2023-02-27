import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  usuari: any;
  password:any;

  constructor(private router: Router, private http: HttpClient) {
    var usr=http.get<any>("http://localhost:4080/registre").subscribe((doc)=>{
      console.log(doc)
    })
  }
  ngOnInit() {
  }
  formularioEnviado(){

    if (usr==this.usuari && pasw==this.password){
      const nav: string[] = ['/pagina-web']
      if($myParam.length) {
        nav.push($myParam);
      }
      this.router.navigate(nav)
      localStorage.setItem("nombre",usr!)
    }
  }
}
