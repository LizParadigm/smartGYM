import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionComponent } from '@shared/components/identificacion/identificacion.component';
import { MembresiasComponent } from '@shared/components/membresias/membresias.component';

const routes: Routes = [
  {
    path:'identificacion',
    component:IdentificacionComponent
  },
  {
    path:'membresias',
    component:MembresiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
