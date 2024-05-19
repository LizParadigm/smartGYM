import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from '@shared/components/ingresar/ingresar.component';
import { RegistrarComponent } from '@shared/components/registrar/registrar.component';

const routes: Routes = [
  {
    path:'iniciar-sesion',
    component:IngresarComponent
  },
  {
    path:'registrar',
    component:RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
