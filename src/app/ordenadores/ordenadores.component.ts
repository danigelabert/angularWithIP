import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css']
})
export class OrdenadoresComponent implements OnInit {

  productes: any[];
  bottons: any[];

  constructor() {
    const gratis = {
      activat3: false
    }

    const manana = {
      activat3: false
    }

    const appleBotton = {
      activat3: false
    }

    const hpBotton = {
      activat3: false
    }

    const msiBotton = {
      activat3: false
    }

    const asusBotton = {
      activat3: false
    }

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

    this.bottons = [];
    this.bottons.push(gratis);
    this.bottons.push(manana);
    this.bottons.push(appleBotton);
    this.bottons.push(hpBotton);
    this.bottons.push(msiBotton);
    this.bottons.push(asusBotton);


  }

  ngOnInit() {
  }

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    var suma: any;

    if (elementId=="p7"){
      localStorage.setItem("producto7", document.getElementById('producto7')!.innerHTML)
      suma=document.getElementById('precio7')!.innerHTML
    } else if (elementId=="p8"){
      localStorage.setItem("producto8", document.getElementById('producto8')!.innerHTML)
      suma=document.getElementById('precio8')!.innerHTML
    } else if (elementId=="p9"){
      localStorage.setItem("producto9", document.getElementById('producto9')!.innerHTML)
      suma=document.getElementById('precio9')!.innerHTML
    } else if (elementId=="p10"){
      localStorage.setItem("producto10", document.getElementById('producto10')!.innerHTML)
      suma=document.getElementById('precio10')!.innerHTML
    } else if (elementId=="p11"){
      localStorage.setItem("producto11", document.getElementById('producto11')!.innerHTML)
      suma=document.getElementById('precio11')!.innerHTML
    }
    console.log(localStorage.getItem("producto9"))

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

  setBotton(): void {
    this.bottons
  }

  gratisBotton(): void {
    this.bottons[0].activat3 = !this.bottons[0].activat3;
  }

  mananaBotton(): void {
    this.bottons[1].activat3 = !this.bottons[1].activat3;
  }

  appleBotton(): void {
    this.bottons[2].activat3 = !this.bottons[2].activat3;
  }

  hpBotton(): void {
    this.bottons[3].activat3 = !this.bottons[3].activat3;
  }

  msiBotton(): void {
    this.bottons[4].activat3 = !this.bottons[4].activat3;
  }

  asusBotton(): void {
    this.bottons[5].activat3 = !this.bottons[5].activat3;
  }

  envioGratis(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }

  recibeloManana(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }

  apple(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }

  hp(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }

  msi(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }

  asus(): void {
    for (let i = 0; i < 10; i++) {
      if (this.bottons[i].activat3==false){
        this.productes[i].activat1 = false;
      } else {
        this.productes[i].activat1 = true;
      }
    }
  }
}
