import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent {
  //atributos:
  errorCorreoElectronico: string = '';
  errorContrasena: string = '';

  datosIngreso!:FormGroup;

  // continuar: boolean = true;
  //constructor:
  constructor (private fb:FormBuilder, private http: HttpClient, private router:Router){
    this.validarDatosIngreso();
  }

  //botones:
  ingresar(){
    this.mensajesError();

    if (this.datosIngreso.valid){
      console.log('fase validar terminada :3');
      this.router.navigateByUrl('c/home');
    }

  }
  //metodos:
  //validador:
  validarDatosIngreso(){
    this.datosIngreso = this.fb.group({
      correoElectronico:['',[
        Validators.required,
        Validators.email
      ],[
        //validar si el correo existe en la base de datos.
      ]],

      contrasena:['',[
        Validators.required,
      ],[
        //validar si concuerda con la contraseña de la cuenta.
      ]]
    })
  }

  //mensajes de error:
  mensajesError(){
    //correo electronico:
    if (this.datosIngreso.get('correoElectronico')?.hasError('required')){
      this.errorCorreoElectronico='Campo necesario.';
    }
    else if (this.datosIngreso.get('correoElectronico')?.hasError('email')){
      this.errorCorreoElectronico='Correo invalido.';
    }
    // else if(this.datosIngreso.get('correoElectronico')?.hastError(/*validar existencia en bd.*/)){
    //   this.errorCorreoElectronico='Correo no encontrado';
    // }
    else {
      this.errorCorreoElectronico='';
    }

    //contraseña:
    if (this.datosIngreso.get('contrasena')?.hasError('required')){
      this.errorContrasena='Campo necesario.';
    }
    // else if (this.datosIngreso.get('contrasena')?.hasError(/*vaidar contraseña correcta*/)){
    //   this.errorContrasena='Contraseña incorrecta.';
    // }
    else {
      this.errorContrasena='';
    }
  }

  //redireccionar al home
  entrarALaCuenta():void{
    let tipoUsuario: string = 'llamar al servicio que detecta el tipo de usuario';
    switch (tipoUsuario) {
      case 'cliente':
        this.router.navigateByUrl('c/home');
        break;
      case 'empleado':
        this.router.navigateByUrl('e/home');
        break;
      case 'administrador':
        this.router.navigateByUrl('a/home');
        break;
    }
  }
}
 