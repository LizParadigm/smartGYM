import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-identificador-cliente',
  templateUrl: './identificador-cliente.component.html',
  styleUrl: './identificador-cliente.component.css'
})
export class IdentificadorClienteComponent {
  //variables
  usuarioMembresiaImagen: string = 'assets/media/imagen-membresia.png';
  usuarioMembresiaName: string = 'nivel 1';
  usuarioMembresiaEstado: string = 'activa';
  usuarioMembresiaFechaLimite: string = '12/13/1415';
  
  iconoUpdate: string = 'assets/media/icon/update.png';
  iconoDelete: string = 'assets/media/icon/delete.png';

  usuarioQR: string = 'assets/media/codigo-qr-chingon.png';
  usuarioName: string = 'pedro pistolas';
  usuarioSexo: string = 'Masculino';
  usuarioFechaDeRegistro: string = '11/12/1314';
  
  mostrarAmbasCaras: boolean = true;
  mostrarCaraFrontal: boolean = true;
  mostrarCaraTracera: boolean = true;
  
  //constructor

  //botones
  voltearIdentificacion(){
    if (this.mostrarCaraFrontal){
      this.mostrarCaraFrontal = false;
      this.mostrarCaraTracera = true;
    }
    else {
      this.mostrarCaraFrontal = true;
      this.mostrarCaraTracera = false;
    }
  }
  //funciones
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 750) {
      this.mostrarCaraFrontal = true;
      this.mostrarCaraTracera = true;
    }
  }
}
