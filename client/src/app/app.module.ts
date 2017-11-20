import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact.service';
import { EnviosComponent } from './envios/envios.component';
import { EnvioService } from './envio.service';
import { ConductoresComponent } from './conductores/conductores.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { TransportesComponent } from './transportes/transportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EnviosComponent,
    ConductoresComponent,
    EmpleadosComponent,
    FacturasComponent,
    PaquetesComponent,
    SucursalesComponent,
    TransportesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
