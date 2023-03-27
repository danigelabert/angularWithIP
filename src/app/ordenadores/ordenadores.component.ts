import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css']
})
export class OrdenadoresComponent implements OnInit {

  productes: any[];

  constructor(private http: HttpClient) {

    const producte1 = {
      titol: "MSI Modern 14 Core-i7/16GB/512GB SSD",
      envio: "Envio Gratis",
      preu: "799€",
      marca: "MSI",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/ordinador/msimodern"
    };
    const producte2 = {
      titol: "HP Omen 16 Core-i7/16GB/1TB SSD",
      envio: "Recíbelo mañana",
      preu: "1219€",
      marca: "HP",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/ordinador/hpomen"
    };
    const producte3 = {
      titol: "Asus TUF Gaming Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "999€",
      marca: "Asus",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/ordinador/asustuf"
    };
    const producte4 = {
      titol: "Asus F515 Core-i5/16GB/512GB",
      envio: "Envio Gratis",
      preu: "499€",
      marca: "Asus",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/ordinador/asusf515"
    };
    const producte5 = {
      titol: "Apple MacBook Pro M1/16GB/512GB SSD",
      envio: "Recíbelo mañana",
      preu: "2009€",
      marca: "Apple",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/ordinador/macbook"
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

  prova() {
    var element1 = <HTMLInputElement>document.getElementById("a1");
    var element2 = <HTMLInputElement>document.getElementById("a2");
    var element3 = <HTMLInputElement>document.getElementById("a3");
    var element4 = <HTMLInputElement>document.getElementById("a4");
    var element5 = <HTMLInputElement>document.getElementById("a5");
    var element6 = <HTMLInputElement>document.getElementById("a6");
    var a1
    var a2
    var a3
    var a4
    var a5
    var a6

    if (element1.checked) {
      a1 = true
    } else {
      a1 = false
    }
    if (element2.checked) {
      a2 = true
    } else {
      a2 = false
    }
    if (element3.checked) {
      a3 = true
    } else {
      a3 = false
    }
    if (element4.checked) {
      a4 = true
    } else {
      a4 = false
    }
    if (element5.checked) {
      a5 = true
    } else {
      a5 = false
    }
    if (element6.checked) {
      a6 = true
    } else {
      a6 = false
    }

    this.productes[0].activat1 = false;
    this.productes[2].activat1 = false;
    this.productes[3].activat1 = false;
    this.productes[1].activat1 = false;
    this.productes[4].activat1 = false;

    if (a3 == true) {
      this.productes[4].activat1 = true;
    }
    if (a4 == true) {
      this.productes[1].activat1 = true;
    }
    if (a5 == true) {
      this.productes[0].activat1 = true;
    }
    if (a6 == true) {
      this.productes[2].activat1 = true;
      this.productes[3].activat1 = true;
    }

    if (a1 == true) {
      if (a3 == true || a4 == true || a5 == true || a6 == true) {
        if (this.productes[0].activat1 == true) {
          this.productes[0].activat1 = true;
        } else {
          this.productes[0].activat1 = false;
        }
        if (this.productes[2].activat1 == true) {
          this.productes[2].activat1 = true;
        } else {
          this.productes[2].activat1 = false;
        }
        if (this.productes[3].activat1 == true) {
          this.productes[3].activat1 = true;
        } else {
          this.productes[3].activat1 = false;
        }
        if (this.productes[5].activat1 == true) {
          this.productes[5].activat1 = true;
        }
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      } else {
        this.productes[0].activat1 = true;
        this.productes[2].activat1 = true;
        this.productes[3].activat1 = true;
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      }
    }
    if (a2 == true) {
      if (a3 == true || a4 == true || a5 == true || a6 == true) {

        if (this.productes[1].activat1 == true) {
          this.productes[1].activat1 = true;
        } else {
          this.productes[1].activat1 = false;
        }
        if (this.productes[4].activat1 == true) {
          this.productes[4].activat1 = true;
        } else {
          this.productes[4].activat1 = false;
        }
        this.productes[0].activat1 = false;
        this.productes[2].activat1 = false;
        this.productes[3].activat1 = false;
      } else {
        this.productes[0].activat1 = false;
        this.productes[1].activat1 = true;
        this.productes[2].activat1 = false;
        this.productes[3].activat1 = false;
        this.productes[4].activat1 = true;
        this.productes[5].activat1 = false;
      }
    }
    if (a1 == false && a2 == false && a3 == false && a4 == false && a5 == false && a6 == false) {
      this.productes[0].activat1 = true;
      this.productes[1].activat1 = true;
      this.productes[2].activat1 = true;
      this.productes[3].activat1 = true;
      this.productes[4].activat1 = true;
    }
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
    this.http.post("http://localhost:4080/api/logs", {usuario: localStorage.getItem("nombre"), accion: elementId+" afegit a la cistella."}).subscribe()

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

}
