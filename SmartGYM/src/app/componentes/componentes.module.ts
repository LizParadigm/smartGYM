import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HeaderComponent } from './header/header.component';
import { IdentificadorClienteComponent } from './tarjetas/identificador-cliente/identificador-cliente.component';
import { IdentificadorEmpleadoComponent } from './tarjetas/identificador-empleado/identificador-empleado.component';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarComponent,
    HeaderComponent,
    IdentificadorClienteComponent,
    IdentificadorEmpleadoComponent
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
    HeaderComponent,
    IdentificadorClienteComponent
  ]
})
export class ComponentesModule { }
