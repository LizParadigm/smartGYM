import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutService {

  constructor(
    private router:Router
  ) { }

  tituloHeader():string{
    switch(this.router.url){
      case '/home/identificacion':
        return 'Bienvenido';
      case '/home/membresias':
        return 'Nuestras membresias';
      default:
        return 'SmartGYM';
    }
  }

  atHome():boolean{
    if (this.router.url === '/home/identificacion'){
      return true;
    }
    else{
      return false;
    }
  }

  /*navegacion*/

  retornar(){
    window.history.back();
  }

  cerrarSesion(){
    this.router.navigateByUrl('/auth/iniciar-sesion');
  }

  

  
}
