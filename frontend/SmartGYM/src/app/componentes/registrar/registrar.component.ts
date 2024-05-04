import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  /*atributos*/
  nombre: string = "";
  errorNombre: string = "";
  correoElectronico: string = "";
  errorCorreoElectronico: string = "";
  contrasena: string = "";
  errorContrasena: string = "";
  confirmarContrasena: string = "";
  errorConfirmarContrasena: string = "";
  sexo: string = "";
  errorSexo: string = "";
  politicasDePrivacidad: boolean = false;
  usosYCondiciones: boolean = false;

  continuar: boolean =true;
  
  /*modificacion de valores de campos*/
  aceptarPoliticasDePrivacidad() {
    this.politicasDePrivacidad = !this.politicasDePrivacidad;
  }

  aceptarUsosYCondiciones() {
    this.usosYCondiciones = !this.usosYCondiciones;
  }

  /*verificacion*/
  onSubmit() {
   //nombre
    if (this.nombre.trim()==''){
      this.errorNombre='Nombre necesario.';
      this.continuar=false;
    }
    else {
      this.errorNombre = '';
      console.log('nombre:', this.nombre);
    }
   //correoElectronico
    if (this.correoElectronico.trim() == ''){
      this.errorCorreoElectronico = 'Correo electronico necesario.';
      this.continuar=false;
    }
    else {
      this.errorCorreoElectronico = '';
      console.log('Correo electrónico:', this.correoElectronico);
    }
   //contrasena
    if (this.contrasena.trim() == ''){
      this.errorContrasena = 'Contraseña necesaria.';
      this.continuar=false;
    }
    else if (this.contrasena.length < 8){
      this.errorContrasena = 'Debe ser mayor a 8 caracteres.';
      this.continuar=false;
    }
    else {
      this.errorContrasena = '';
      console.log('Contraseña:', this.contrasena);
    }
   //confirmarContrasena
    if (this.confirmarContrasena.trim() == ''){
      this.errorConfirmarContrasena = 'Vuelva a escribir la contraseña.';
      this.continuar=false;
    }
    else if (this.confirmarContrasena != this.contrasena){
      this.errorConfirmarContrasena = 'Las contraseñas no coinciden.';
      this.continuar=false;
    }
    else {
      this.errorConfirmarContrasena = '';
      console.log(this.confirmarContrasena, ' coincide con ', this.contrasena,'.');
    }
   //sexo
    if (this.sexo.trim() == ''){
      this.errorSexo = 'Seleccione su sexo.';
      this.continuar=false;
    }
    else {
      this.errorSexo = '';
      console.log('Sexo:',this.sexo);
    }
    //politicas y terminos aceptados
    if (this.politicasDePrivacidad && this.usosYCondiciones && this.continuar){
      console.log('----------politicas y condiciones aceptadas----------');
      console.log('Nombre:',this.nombre);
      console.log('Correo electronico:', this.correoElectronico);
      console.log('Contraseña:', this.contrasena);
      console.log('Contraseña de confirmacion:',this.confirmarContrasena);
      console.log('Sexo:',this.sexo);
      console.log('-----------------------------------------------------');
      console.log('cuenta creada')
      console.log('-----------------------------------------------------');
      this.abrirCuenta();
    }
    else {
      this.continuar=true;
    }
  }

  abrirCuenta():void {
    /*logica para redireccionar a la nueva cuenta creada*/
  }
}
