import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-peupagina',
  templateUrl: './peupagina.component.html',
  styleUrls: ['./peupagina.component.css']
})
export class PeupaginaComponent implements OnInit{
  imatges: any[];
  constructor() {
    const images = {
      foto1: "http://172.16.9.1:4080/images/buscador/logo"
    };
    this.imatges = [];
    this.imatges.push(images);
  }

  ngOnInit() {
  }

}
