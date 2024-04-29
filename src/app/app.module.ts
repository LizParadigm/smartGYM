import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuperarcuentaComponent } from './recuperarcuenta/recuperarcuenta.component';
import { CodigorderecuperacionComponent } from './codigorderecuperacion/codigorderecuperacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuperarcuentaComponent,
    CodigorderecuperacionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
