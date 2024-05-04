import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent {
  correoElectronico: string = '';
  errorCorreoElectronico: string = '';
  contrasena: string = '';
  errorContrasena: string = '';

  continuar: boolean = true;

  onSubmit() {
    // Validación básica
    if (this.correoElectronico.trim() === ''){
      this.errorCorreoElectronico = 'Por favor proporcione un correo electronico.';
      this.continuar = false;
    }
    else if (this.correoElectronico !== 'correoPrueba@ejemplo.com') {
      this.errorCorreoElectronico = 'Correo electrónico no encontrado.';
      this.continuar = false;
    }
    else {
      this.errorCorreoElectronico = '';
      console.log('Correo electrónico:', this.correoElectronico);
    }

    if (this.contrasena.trim() === ''){
      this.errorContrasena = 'Por favor proporcione una contraseña.';
      this.continuar = false;
    }
    else if (this.contrasena !== 'contraseña123') {
      this.errorContrasena = 'Contraseña incorrecta.';
      this.continuar = false;
    }
    
    else {
      this.errorContrasena = '';
      console.log('Contraseña:', this.contrasena);
    }

    if (this.continuar){
      this.entrarALaCuenta();
    }
    else {
      this.continuar = true;
    }
  }

  entrarALaCuenta():void{
    let tipoUsuario: string = 'llamar al servicio que detecta el tipo de usuario';
    switch (tipoUsuario) {
      case 'cliente':
        //redirecciona a home Cliente;
        break;
      case 'empleado':
        //redireccionar a home Empleado;
        break;
      case 'administrador':
        //redireccionar a home Administrador;
        break;
    }
  }
}
