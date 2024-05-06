import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    IniciarSesionComponent,
    RegistrarComponent,
    HeaderComponent
  ]
})
export class ComponentesModule { }
