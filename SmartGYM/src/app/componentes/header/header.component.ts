import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  tituloHeader: string = 'bienvenido';

  //constructores
  constructor(
    private router:Router
  ){

  }

  //botones
  volver(){
    window.history.back();
  }

  cerrarSesion(){
    console.log('cerrando sesion');
    this.router.navigateByUrl('ingresar');
  }
  //metodos
  //ocultar boton dependiendo si esta en el home o no:
  ocultar(): boolean {
    console.log(this.router.url);
    return this.router.url === '/c/home';
  }
}
