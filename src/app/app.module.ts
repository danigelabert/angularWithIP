import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaWebComponent } from './pagina-web/pagina-web.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
