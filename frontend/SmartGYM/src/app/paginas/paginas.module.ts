import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RegistrandoComponent } from './registrando/registrando.component';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    InicioDeSesionComponent,
    RegistrandoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterOutlet
  ],
  exports: [
    InicioDeSesionComponent,
    RegistrandoComponent,
    ClienteComponent
  ]
})
export class PaginasModule { }
