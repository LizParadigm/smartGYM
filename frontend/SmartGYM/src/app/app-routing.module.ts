import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrandoComponent } from './paginas/registrando/registrando.component';
import { InicioDeSesionComponent } from './paginas/inicio-de-sesion/inicio-de-sesion.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';

const routes: Routes = [
  {path:'',component:InicioDeSesionComponent},
  {path:'ingresar',component:InicioDeSesionComponent},
  {path:'registrando', component:RegistrandoComponent},
  {path:'cliente/home', component:ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
