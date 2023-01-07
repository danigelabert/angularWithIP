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
        marca: "Apple",
        activat1: true,
        activat2: true
      };
      const producte2 = {
        titol: "iPhone 13",
        envio: "Recíbelo mañana",
        preu: "999€",
        marca: "Apple",
        activat1: true,
        activat2: true
      };
      const producte3 = {
        titol: "Realme GT Master Edition",
        envio: "Envio Gratis",
        preu: "330€",
        marca: "Realme",
        activat1: true,
        activat2: true
      };
      const producte4 = {
        titol: "Oppo Find X3 Pro",
        envio: "Envio Gratis",
        preu: "889€",
        marca: "Oppo",
        activat1: true,
        activat2: true
      };
      const producte5 = {
        titol: "Xiaomi 12T Pro",
        envio: "Recíbelo mañana",
        preu: "1450€",
        marca: "Xiaomi",
        activat1: true,
        activat2: true
      };
      const producte6 = {
        titol: "Samsung S22 Ultra",
        envio: "Envio Gratis",
        preu: "1459€",
        marca: "Samsung",
        activat1: true,
        activat2: true
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

  envioGratuit() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].envio == "Envio Gratis") {
        this.productes[i].activat1 = true;
      } else {
        this.productes[i].activat1 = false;
      }
    }
  }

  recibeloMananaa() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].envio == "Recíbelo mañana") {
        this.productes[i].activat1 = true;
      } else {
        this.productes[i].activat1 = false;
      }
    }
  }

  apple() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].marca == "Apple") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  xiaomi() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].marca == "Xiaomi") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  samsung() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].marca == "Samsung") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  realMe() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].marca == "Realme") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  oppo() : void {
    for (let i=0; i<10; i++)  {
      if (this.productes[i].marca == "Oppo") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }


}
