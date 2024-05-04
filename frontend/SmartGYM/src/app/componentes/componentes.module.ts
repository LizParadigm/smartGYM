import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    IniciarSesionComponent,
    RegistrarComponent,
    HeaderComponent
  ]
})
export class ComponentesModule { }
