import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrandoComponent } from './paginas/registrando/registrando.component';
import { InicioDeSesionComponent } from './paginas/inicio-de-sesion/inicio-de-sesion.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { TiendaMembresiasComponent } from './paginas/tienda-membresias/tienda-membresias.component';

const routes: Routes = [
  {path:'',component:InicioDeSesionComponent},
  {path:'ingresar',component:InicioDeSesionComponent},
  {path:'registrando', component:RegistrandoComponent},
  {path:'c/home', component:ClienteComponent},
  {path:'membresias', component:TiendaMembresiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
