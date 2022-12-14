import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaWebComponent } from './pagina-web/pagina-web.component';
import { MovilesComponent } from './moviles/moviles.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { PerifericosComponent } from './perifericos/perifericos.component';
import { CondicionesComponent } from './condiciones/condiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaWebComponent,
    MovilesComponent,
    CarritoComponent,
    ContactoComponent,
    FormularioComponent,
    Formulario2Component,
    OrdenadoresComponent,
    PerifericosComponent,
    CondicionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
