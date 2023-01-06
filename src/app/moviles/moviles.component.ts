import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{
    productes: any[];
    constructor() {
      const producte1 = {
        titol: "iPhone 14 Pro Max",
        envio: "Envio Gratis",
        preu: "1499€",
        activat: true
      };
      const producte2 = {
        titol: "iPhone 13",
        envio: "Recíbelo mañana",
        preu: "999€",
        activat: true
      };
      const producte3 = {
        titol: "Realme GT Master Edition",
        envio: "Envio Gratis",
        preu: "330€",
        activat: true
      };
      const producte4 = {
        titol: "Oppo Find X3 Pro",
        envio: "Envio Gratis",
        preu: "889€",
        activat: true
      };
      const producte5 = {
        titol: "Xiaomi 12T Pro",
        envio: "Recíbelo mañana",
        preu: "1450€",
        activat: true
      };
      const producte6 = {
        titol: "Samsung S22 Ultra",
        envio: "Envio Gratis",
        preu: "1459€",
        activat: true
      };
      this.productes = [];
      this.productes.push(producte1);
      this.productes.push(producte2);
      this.productes.push(producte3);
      this.productes.push(producte4);
      this.productes.push(producte5);
      this.productes.push(producte6);
   }

  afegir(clicked_id: any){
    alert(clicked_id);
  }

  ngOnInit(){
  }

  envioGratis() : void {
    this.productes[0].activat = true;
    this.productes[1].activat = false;
    this.productes[2].activat = true;
    this.productes[3].activat = true;
    this.productes[4].activat = false;
    this.productes[5].activat = true;
  }

  recibeloManana() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = true;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = true;
    this.productes[5].activat = false;
  }

  apple() : void {
    this.productes[0].activat = true;
    this.productes[1].activat = true;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
    this.productes[5].activat = false;
  }

  xiaomi() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = true;
    this.productes[5].activat = false;
  }

  samsung() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
    this.productes[5].activat = true;
  }

  realMe() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = true;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
    this.productes[5].activat = false;
  }

  oppo() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = true;
    this.productes[4].activat = false;
    this.productes[5].activat = false;
  }


}
