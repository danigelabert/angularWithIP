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
  recaptcha: boolean = false;
  constructor(private router: Router, private http: HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);
  }

  ngOnInit(): void {
  }
  resolved(captchaResponse: string) {
    this.recaptcha=true;
    console.log(`Resolved captche with response ${captchaResponse}:`)
  }
  formularioEnviado($myParam: string=''){
    if (this.recaptcha==true){
      var resultat: Object =false;
      var username:any;
      let req = new HttpParams().set('email',this.correu);
      let req2 = new HttpParams().set('name',this.usuari);

      this.http.get("http://localhost:4080/inicisessio", {params: req}).subscribe((client)=>{
        resultat=client;
        console.log(resultat);
        if(resultat==true){
          this.http.get("http://localhost:4080/user", {params: req2}).subscribe((client)=> {
            resultat = client;
            console.log(resultat);
            if (resultat == true) {
              this.http.post("http://localhost:4080/formularioconsulta", {
                usuario: this.usuari,
                correu: this.correu,
                missatge: this.missatge
              }).subscribe()
              alert("Formulari enviat!")
              const nav: string[] = ['/pagina-web']
              if($myParam.length) {
                nav.push($myParam);
              }
              this.router.navigate(nav)
            }else
              alert("Usuari incorrecte.")
          })

        }else{
          alert("Este correo no existe, introduce de nuevo tu correo")
        }
      })


        } else
          alert("S'ha de fer el Recaptcha!")
      }
    }

