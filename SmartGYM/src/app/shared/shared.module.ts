import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { DeleteMembresiaComponent } from './components/delete-membresia/delete-membresia.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ComprarMembresiaComponent } from './components/comprar-membresia/comprar-membresia.component';
import { CambiarContraComponent } from './components/cambiar-contra/cambiar-contra.component';
import { RecuperarcuentaComponent } from './components/recuperarcuenta/recuperarcuenta.component';
import { CodigoderecuperacionComponent } from './components/codigoderecuperacion/codigoderecuperacion.component';




@NgModule({
  declarations: [
    HeaderComponent,
    IdentificacionComponent,
    IngresarComponent,
    RegistrarComponent,
    DeleteMembresiaComponent,
    MembresiaComponent,
    MembresiasComponent,
    PruebasComponent,
    ComprarMembresiaComponent,
    CambiarContraComponent,
    RecuperarcuentaComponent,
    CodigoderecuperacionComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatDialogModule
  ],
  exports: [
    IngresarComponent,
    RegistrarComponent,
    HeaderComponent,
    IdentificacionComponent,
    DeleteMembresiaComponent,
    MembresiaComponent
  ]
})
export class SharedModule { }
