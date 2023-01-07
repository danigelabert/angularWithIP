import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css']
})
export class OrdenadoresComponent implements OnInit {

  productes: any[];

  constructor() {
    const producte1 = {
      titol: "MSI Modern 14 Core-i7/16GB/512GB SSD",
      envio: "Envio Gratis",
      preu: "799€",
      marca: "MSI",
      activat1: true,
      activat2: true
    };
    const producte2 = {
      titol: "HP Omen 16 Core-i7/16GB/1TB SSD",
      envio: "Recíbelo mañana",
      preu: "1219€",
      marca: "HP",
      activat1: true,
      activat2: true
    };
    const producte3 = {
      titol: "Asus TUF Gaming Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "999€",
      marca: "Asus",
      activat1: true,
      activat2: true
    };
    const producte4 = {
      titol: "Asus F515 Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "499€",
      marca: "Asus",
      activat1: true,
      activat2: true
    };
    const producte5 = {
      titol: "Apple MacBook Pro M1/16GB/512GB SSD",
      envio: "Recíbelo mañana",
      preu: "2009€",
      marca: "Apple",
      activat1: true,
      activat2: true
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

  envioGratis(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].envio == "Envio Gratis") {
        this.productes[i].activat1 = true;
      } else {
        this.productes[i].activat1 = false;
      }
    }
  }

  recibeloManana(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].envio == "Recíbelo mañana") {
        this.productes[i].activat1 = true;
      } else {
        this.productes[i].activat1 = false;
      }
    }
  }

  apple(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].marca == "Apple") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  hp(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].marca == "HP") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  msi(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].marca == "MSI") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  asus(): void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].marca == "Asus") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }
}
