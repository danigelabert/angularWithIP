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
      activat: true
    };
    const producte2 = {
      titol: "Logitech K120",
      envio: "Recíbelo mañana",
      preu: "11€",
      activat: true
    };
    const producte3 = {
      titol: "Forgeon Clutch",
      envio: "Envio Gratis",
      preu: "499€",
      activat: true
    };
    const producte4 = {
      titol: "Razer Basilisk",
      envio: "Envio Gratis",
      preu: "40€",
      activat: true
    };
    const producte5 = {
      titol: "Asus P307",
      envio: "Recíbelo mañana",
      preu: "45€",
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

  monitors() : void {
    this.productes[0].activat = true;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
  }

  teclados() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = true;
    this.productes[2].activat = true;
    this.productes[3].activat = false;
    this.productes[4].activat = false;
  }

  ratones() : void {
    this.productes[0].activat = false;
    this.productes[1].activat = false;
    this.productes[2].activat = false;
    this.productes[3].activat = true;
    this.productes[4].activat = true;
  }
}
