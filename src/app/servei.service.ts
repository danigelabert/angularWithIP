import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiService {

  constructor() {
  }

  setNom(x: string, y:string){
    localStorage.setItem('usuario',x);
    localStorage.setItem('password', y)
  }
  getUser(){
    return localStorage.getItem('usuario')
  }
  getPassword(){
    return localStorage.getItem('password')
  }
}
