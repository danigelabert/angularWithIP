import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css']
})
export class OrdenadoresComponent implements OnInit{

  productes: any[];
  constructor() {
    const producte1 = {
      titol: "MSI Modern 14 Core-i7/16GB/512GB SSD",
      envio: "Envio Gratis",
      preu: "799€",
      activat: true
    };
    const producte2 = {
      titol: "HP Omen 16 Core-i7/16GB/1TB SSD",
      envio: "Recíbelo mañana",
      preu: "1219€",
      activat: true
    };
    const producte3 = {
      titol: "Asus TUF Gaming Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "999€",
      activat: true
    };
    const producte4 = {
      titol: "Asus F515 Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "499€",
      activat: true
    };
    const producte5 = {
      titol: "Apple MacBook Pro M1/16GB/512GB SSD",
      envio: "Recíbelo mañana",
      preu: "2009€",
      activat: true
    };

    this.productes = [];
    this.productes.push(producte1);
    this.productes.push(producte2);
    this.productes.push(producte3);
    this.productes.push(producte4);
    this.productes.push(producte5);
  }

  ngOnInit() {
  }

  envioGratis() : void {
    this.productes[0].activat = true;
    this.productes[1].activat = false;
    this.productes[2].activat = true;
    this.productes[3].activat = true;
    this.productes[4].activat = false;
  }

  recibeloManana() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = true;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = true;
  }

  apple() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = true;
  }

  hp() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = true;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
  }

  msi() : void {
    this.productes[0].activat = true;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
  }

  asus() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = true;
    this.productes[3].activat = true;
    this.productes[4].activat = false;
  }
}
