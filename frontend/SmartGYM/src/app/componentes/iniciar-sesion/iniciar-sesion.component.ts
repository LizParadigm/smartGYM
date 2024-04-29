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

  onSubmit() {
    // Validación básica
    if (this.correoElectronico.trim() === ''){
      this.errorCorreoElectronico = 'Por favor proporcione un correo electronico.';
    }
    else if (this.correoElectronico !== 'correoPrueba@ejemplo.com') {
      this.errorCorreoElectronico = 'Correo electrónico no encontrado.';
    }
    else {
      this.errorCorreoElectronico = '';
      console.log('Correo electrónico:', this.correoElectronico);
    }

    if (this.contrasena.trim() === ''){
      this.errorContrasena = 'Por favor proporcione una contraseña.'
    }
    else if (this.contrasena !== 'contraseña123') {
      this.errorContrasena = 'Contraseña incorrecta.';
    }
    
    else {
      this.errorContrasena = '';
      console.log('Contraseña:', this.contrasena);
    }
  }
}
