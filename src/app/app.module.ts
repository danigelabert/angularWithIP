import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PaginaWebComponent} from './pagina-web/pagina-web.component';
import {CarritoComponent} from "./carrito/carrito.component";
import {CondicionesComponent} from "./condiciones/condiciones.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {Formulario2Component} from "./formulario2/formulario2.component";
import {MovilesComponent} from "./moviles/moviles.component";
import {OrdenadoresComponent} from "./ordenadores/ordenadores.component";
import {PerifericosComponent} from "./perifericos/perifericos.component";
import {FormsModule} from "@angular/forms";
import { routing } from './app.routing';
import {MenuComponent} from "./menu/menu.component";
import { BuscadorComponent } from './buscador/buscador.component';
import { PeupaginaComponent } from './peupagina/peupagina.component';
import { RestaurarComponent } from './restaurar/restaurar.component';
import {HttpClientModule} from "@angular/common/http";
import { CambiarContrasenyaComponent } from './cambiar-contrasenya/cambiar-contrasenya.component';
import { DatosComponent } from './datos/datos.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaWebComponent,
    CarritoComponent,
    CondicionesComponent,
    ContactoComponent,
    FormularioComponent,
    Formulario2Component,
    MovilesComponent,
    OrdenadoresComponent,
    PerifericosComponent,
    MenuComponent,
    BuscadorComponent,
    PeupaginaComponent,
    RestaurarComponent,
    CambiarContrasenyaComponent,
    DatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
