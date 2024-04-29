import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    InicioDeSesionComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    InicioDeSesionComponent
  ]
})
export class PaginasModule { }
