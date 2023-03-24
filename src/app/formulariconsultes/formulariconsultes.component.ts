import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-formulariconsultes',
  templateUrl: './formulariconsultes.component.html',
  styleUrls: ['./formulariconsultes.component.css']
})
export class FormulariconsultesComponent implements OnInit{
  productes: any[];
  correu: any;
  usuari: any;
  missatge: any;
  constructor(private router: Router, private http: HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);
  }

  ngOnInit(): void {
  }
  formularioEnviado($myParam: string=''){
    var resultat: Object =false;
    var username:any;
    let req = new HttpParams().set('email',this.correu);

    this.http.get("http://localhost:4080/inicisessio", {params: req}).subscribe((client)=>{
      resultat=client;
      console.log(resultat);
      if(resultat==true){
              this.http.get("http://localhost:4080/api/nombre", {params: req}).subscribe((nom)=>{
              //@ts-ignore
              localStorage.setItem("correo",this.correu)
              alert("Consulta enviada correctamente")
              const nav: string[] = ['/pagina-web']
              if($myParam.length) {
                nav.push($myParam);
              }
              this.router.navigate(nav)
            })
      }else
            alert("Este correo no existe, introduce de nuevo tu correo")
    })

    this.http.post("http://localhost:4080/formularioconsulta", {usuario: this.usuari, correu: this.correu, missatge: this.missatge}).subscribe()

  }

}
