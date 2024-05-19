import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembresiasRoutingModule } from './membresias-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MembresiasPageComponent } from './pages/membresias-page/membresias-page.component';


@NgModule({
  declarations: [
    MembresiasPageComponent
  ],
  imports: [
    CommonModule,
    MembresiasRoutingModule,
    SharedModule
  ]
})
export class MembresiasModule { }
