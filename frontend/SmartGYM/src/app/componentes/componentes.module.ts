import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';



@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IniciarSesionComponent
  ]
})
export class ComponentesModule { }
