import { Injectable } from '@angular/core';
import { min } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeErrorService {

  constructor() { }

  registrarNombre(required:boolean, pattern1:boolean, minlength:boolean){
    let errorNombre: string;

    if (required){
      errorNombre='Campo necesario.';
    }
    else if (pattern1){
      errorNombre='solo se permiten letras.';
    }
    else if (minlength){
      errorNombre='Debe tener mas de 3 letras.'
    }
    else {
      errorNombre='';
    }

    return errorNombre;
  }

  registrarCorreo(required:boolean, email:boolean, existe:boolean){
    let errorCorreoElectronico: string;
    if (required){
      errorCorreoElectronico='Campo necesario.';
    }
    else if (email){
      errorCorreoElectronico='Correo invalido.'
    }
    else if (existe){
      errorCorreoElectronico='Alguien ya registro ese correo.'
    }
    else {
      errorCorreoElectronico='';
    }
    
    return errorCorreoElectronico;
  }

  registrarContrasena(required:boolean, minlength:boolean){
    let errorContrasena: string;

    if (required){
      errorContrasena='Campo necesario.';
    }
    else if (minlength){
      errorContrasena='Debe tener mas de 8 caracteres';
    }
    else {
      errorContrasena='';
    }
    
    return errorContrasena;
  }

  registrarConfirmarContrasena(required:boolean, parentesco:boolean){
    let errorConfirmarContrasena: string;
    
    if (required){
      errorConfirmarContrasena='Campo necesario.';
    }
    else if (parentesco==false){
      errorConfirmarContrasena='Las contraseñas deben coincidir.';
    }
    else {
      errorConfirmarContrasena='';
    }

    return errorConfirmarContrasena;
  }
    
  registrarSexo(required:boolean){
    let errorSexo: string;
    
    if(required){
      errorSexo='Campo necesario.';
    }
    else {
      errorSexo='';
    }

    return errorSexo;
  }

  ingresarCorreo(required:boolean, email:boolean, existe:boolean){
    let errorCorreoElectronico:string;
    if (required){
      errorCorreoElectronico='Campo necesario.';
    }
    else if (email){
      errorCorreoElectronico='Correo invalido.';
    }
    else if(existe){
      errorCorreoElectronico='Correo no encontrado';
    }
    else {
      errorCorreoElectronico='';
    }

    return errorCorreoElectronico;
  }

  ingresarContrasena(required:boolean, incorrecta:boolean){
    let errorContrasena:string;

    if(required){
      errorContrasena='Campo necesario.';
    }
    else if (incorrecta){
      errorContrasena='Contraseña incorrecta.';
    }
    else{
      errorContrasena='';
    }

    return errorContrasena;
  }

  ingresarNumerosDeTarjeta(required:boolean,numeros:boolean,minlength:boolean):string {
    let error:string;
    if(required){
      error='Campo requerido.';
    }
    else if(numeros){
      error='Ingrese los numeros de su tarjeta.';
    }
    else if(minlength){
      error='Deben ser los 16 digitos de su tarjeta';
    }
    else{
      error='';
    }

    return error;
  }

  ingresarFechaExpiraTarjeta(required:boolean,minlength:boolean): string {
    let error:string;
    if(required){
      error='Campo requerido.';
    }
    else if(minlength){
      error='Ingrese la fecha que expira ejemplo: 06/24 .';
    }
    else{
      error='';
    }

    return error;
  }

  ingresarCvv(required:boolean,numeros:boolean,minlength:boolean): string {
    let error:string;
    if(required){
      error='Campo requerido.';
    }
    else if(numeros){
      error='Ingrese los numeros correspondientes a su cvv.';
    }
    else if(minlength){
      error='Deben ser los 4 numeros de su cvv';
    }
    else{
      error='';
    }

    return error;
  }

  ingresarTitular(required:boolean, pattern1:boolean): string {
    let error:string;
    if(required){
      error='Campo necesario';
    }
    else if(pattern1){
      error='Solo letras'
    }
    else{
      error='';
    }
    
    return error;
  }
    
}
