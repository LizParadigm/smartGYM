import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { DeleteMembresiaComponent } from '../delete-membresia/delete-membresia.component';
import { ObtenerDatosService } from '@shared/services/apiSimulada/obtener-datos.service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrl: './identificacion.component.css'
})
export class IdentificacionComponent implements OnInit{
  datosUsuario: any;
  tipoUsuario: string = '';

  iconoUpdate: string = 'assets/media/icon/update.png';
  iconoDelete: string = 'assets/media/icon/delete.png';
  
  mostrarAmbasCaras: boolean = true;
  mostrarCaraFrontal: boolean = true;
  mostrarCaraTracera: boolean = true;
  
  //constructor
  constructor (
    public router:Router,
    private obtenerdatos:ObtenerDatosService,
    public dialog:Dialog
  ){
  }

  ngOnInit(): void {
        [this.datosUsuario, this.tipoUsuario] = this.obtenerdatos.usuario();

  }

  //botones
  cambiarCara(){
    if (this.mostrarCaraFrontal){
      this.mostrarCaraFrontal = false;
      this.mostrarCaraTracera = true;
    }
    else {
      this.mostrarCaraFrontal = true;
      this.mostrarCaraTracera = false;
    }
  }

  // abrirTienda(){
  //   this.router.navigateByUrl('home/membresias');
  // }
  
  cancelarMembresia(){
    this.dialog.open(DeleteMembresiaComponent);
  }

  //metodos
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 750) {
      this.mostrarCaraFrontal = true;
      this.mostrarCaraTracera = true;
    }
  } 
}
