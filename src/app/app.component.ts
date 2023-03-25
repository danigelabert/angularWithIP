import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjecteFinalAngular';
  constructor(private http: HttpClient) {
    this.http.post("http://localhost:4080/lecturaBD", {} ).subscribe()
    console.log("FET")
  }
}

