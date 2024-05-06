import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ComponentesModule } from '../componentes/componentes.module';

import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { RegistrandoComponent } from './registrando/registrando.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TiendaMembresiasComponent } from './tienda-membresias/tienda-membresias.component';



@NgModule({
  declarations: [
    InicioDeSesionComponent,
    RegistrandoComponent,
    ClienteComponent,
    TiendaMembresiasComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterOutlet
  ],
  exports: [
    InicioDeSesionComponent,
    RegistrandoComponent,
    ClienteComponent,
    TiendaMembresiasComponent
  ]
})
export class PaginasModule { }
