import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  /*atributos*/
  errorNombre: string = "";
  errorCorreoElectronico: string = "";
  errorContrasena: string = "";
  errorConfirmarContrasena: string = "";
  sexo: string = "";
  errorSexo: string = "";
  
  politicasDePrivacidad: boolean = false;
  usosYCondiciones: boolean = false;

  forma!:FormGroup;
  
  /*constructor*/
  constructor(private fb:FormBuilder){
    this.crearFormulario();
  }

  /*validador*/
  crearFormulario(){
    this.forma = this.fb.group({
      nombre:['',
        [Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z\s]+$/)
      ]],

      correoElectronico:['',
        [Validators.required,
          Validators.email],
      ],

      contrasena:['',
        [Validators.required,
          Validators.minLength(8)],
      ],

      confirmarContrasena:['',
        [Validators.required],
      ],

      sexo:['',
        [Validators.required],
      ]}
    )
  }
  validarParentesco(){
    const contra1=this.forma.get('contrasena')?.value;
    const contra2=this.forma.get('confirmarContrasena')?.value;

    return contra1===contra2;
  }
  
  /*botones*/
  registrar(){
    this.mensajesError();
    if (this.politicasDePrivacidad && this.usosYCondiciones && this.forma.valid && this.validarParentesco()){
      console.log('fase validar terminada :3');
    }
  }

  //mensajes de error
  //consultar si se deberia fragmentar de un solo metodo de mensajes de error, a un metodo para cada atributo "error..."
  mensajesError(){
    //error nombre
    if (this.forma.get('nombre')?.hasError('required')){
      this.errorNombre='Campo necesario.';
    }
    else if (this.forma.get('nombre')?.hasError('pattern')){
      this.errorNombre='solo se permiten letras.'
    }
    else if (this.forma.get('nombre')?.hasError('minlength')){
      this.errorNombre='Debe tener mas de 3 letras.'
    }
    else {
      this.errorNombre='';
    }

    //error correo electronico
    if (this.forma.get('correoElectronico')?.hasError('required')){
      this.errorCorreoElectronico='Campo necesario.';
    }
    else if (this.forma.get('correoElectronico')?.hasError('email')){
      this.errorCorreoElectronico='Correo invalido.'
    }
    //falta validacion por si ya se registro ese correo...
    else {
      this.errorCorreoElectronico='';
    }

    //error contraseña
    if (this.forma.get('contrasena')?.hasError('required')){
      this.errorContrasena='Campo necesario.';
    }
    else if (this.forma.get('contrasena')?.hasError('minlength')){
      this.errorContrasena='Debe tener mas de 8 caracteres';
    }
    else {
      this.errorContrasena='';
    }

    //error confirmar contraseña
    if (this.forma.get('confirmarContrasena')?.hasError('required')){
      this.errorConfirmarContrasena='Campo necesario.';
    }
    else if (this.validarParentesco()==false){
      this.errorConfirmarContrasena='Las contraseñas deben coincidir.';
    }
    else {
      this.errorConfirmarContrasena='';
    }

    //error sexo
    if(this.forma.get('sexo')?.hasError('required')){
      this.errorSexo='Campo necesario.';
    }
    else {
      this.errorSexo='';
    }
  }

  /*aceptar politicas y condiciones de uso*/
  aceptarPoliticasDePrivacidad() {
    this.politicasDePrivacidad = !this.politicasDePrivacidad;
  }

  aceptarUsosYCondiciones() {
    this.usosYCondiciones = !this.usosYCondiciones;
  }
}
