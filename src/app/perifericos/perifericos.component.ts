import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent implements OnInit{
  productes: any[];
  constructor() {
    const producte1 = {
      titol: "NewSkill Icarus",
      envio: "Envio Gratis",
      preu: "499€",
      tipus: "Monitor",
      activat1: true,
      activat2: true
    };
    const producte2 = {
      titol: "Logitech K120",
      envio: "Recíbelo mañana",
      preu: "11€",
      tipus: "Teclat",
      activat1: true,
      activat2: true
    };
    const producte3 = {
      titol: "Forgeon Clutch",
      envio: "Envio Gratis",
      preu: "499€",
      tipus: "Teclat",
      activat1: true,
      activat2: true
    };
    const producte4 = {
      titol: "Razer Basilisk",
      envio: "Envio Gratis",
      preu: "40€",
      tipus: "Ratoli",
      activat1: true,
      activat2: true
    };
    const producte5 = {
      titol: "Asus P307",
      envio: "Recíbelo mañana",
      preu: "45€",
      tipus: "Ratoli",
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

  monitors() : void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].tipus == "Monitor") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  teclados() : void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].tipus == "Teclat") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }

  ratones() : void {
    for (let i = 0; i < 10; i++) {
      if (this.productes[i].tipus == "Ratoli") {
        this.productes[i].activat2 = true;
      } else {
        this.productes[i].activat2 = false;
      }
    }
  }
}
