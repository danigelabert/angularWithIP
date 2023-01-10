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

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    var suma: any;

    if (elementId=="p12"){
      localStorage.setItem("producto12", document.getElementById('producto12')!.innerHTML)
      suma=document.getElementById('precio12')!.innerHTML
    } else if (elementId=="p13"){
      localStorage.setItem("producto13", document.getElementById('producto13')!.innerHTML)
      suma=document.getElementById('precio13')!.innerHTML
    } else if (elementId=="p14"){
      localStorage.setItem("producto14", document.getElementById('producto14')!.innerHTML)
      suma=document.getElementById('precio14')!.innerHTML
    } else if (elementId=="p15"){
      localStorage.setItem("producto15", document.getElementById('producto15')!.innerHTML)
      suma=document.getElementById('precio15')!.innerHTML
    } else if (elementId=="p16"){
      localStorage.setItem("producto16", document.getElementById('producto16')!.innerHTML)
      suma=document.getElementById('precio16')!.innerHTML
    }

    function preu(){
      var res=localStorage.getItem('preu')!
      var x=parseInt(res)
      var z=parseInt(suma)
      var y= x+z
      if (isNaN(y)){
        y=z;
      } else {
        y= x+z
      }
      localStorage.setItem('preu',y.toString())
      console.log(localStorage.getItem('preu'))
    }
    preu()
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
