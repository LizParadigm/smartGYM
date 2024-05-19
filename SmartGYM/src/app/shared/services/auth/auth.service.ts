import { Injectable } from '@angular/core';
import * as simulacionApi from '../../../data/users.json'
import { Cliente } from 'src/app/core/models/cliente.model';
import { Empleado } from 'src/app/core/models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authservice: any;

  constructor(
  ) { }

  validarCorreoElectronicoExistente(correoElectronico:string) {
    const { clientes, empleados }: any = (simulacionApi as any).default;
    let correoExiste = false;

    clientes.forEach((cliente: any) => {
      if (cliente.correo_electronico === correoElectronico) {
        correoExiste = true;
        console.log('correo encontrado en  clientes');
        return;
      }
    });

    if (!correoExiste) {
      empleados.forEach((empleado: any) => {
        if (empleado.correo_electronico === correoElectronico) {
          correoExiste = true;
          console.log('correo encontrado en empleados');
          return; 
        }
      });
    }
    return correoExiste;
  }

  validarContrasenaCorrecta(correo:string, contrasena:string) {
    const { clientes, empleados }: any = (simulacionApi as any).default;
    let correoEncontrado = false;
    let contrasenaCorrecta = false;

    clientes.forEach((cliente: any) => {
      if (cliente.correo_electronico === correo) {
        if(cliente.contraseña === contrasena){
          contrasenaCorrecta=true;
          console.log('contraseña correcta');
        }
        correoEncontrado=true;
        return;
      }
    });

    if (!correoEncontrado) {
      empleados.forEach((empleado: any) => {
        if (empleado.correo_electronico === correo) {
          if(empleado.contraseña === contrasena){
            contrasenaCorrecta=true;
            console.log('contraseña correcta');
          }
          return; 
        }
      });
    }
    return contrasenaCorrecta;
  }

  registrarUser (user:JSON, tipoUsuario: string): boolean {
    let usuarioCreado:boolean=true;
    console.log('datos del nuevo usuario: ', user, ' Ademas, es tipo: ', tipoUsuario)
    return usuarioCreado
  }

  ingresarUser (correo:string, contrasena:string): boolean {
    console.log('se envio el correo y la contrasena','correo: ',correo, 'contrasena: ',contrasena);
    const { clientes, empleados }: any = (simulacionApi as any).default;
    let correoEncontrado:boolean = false;
    let usuarioEncontrado:boolean =false;
    let datosUsuario: Cliente | Empleado ;

    clientes.forEach((cliente: Cliente) => {
      console.log(cliente.correo_electronico, correo)
      if (cliente.correo_electronico === correo) {
        correoEncontrado=true;
        usuarioEncontrado=true;
        datosUsuario=cliente;
        console.log('bla.....',datosUsuario);
        console.log('ble...', cliente)
        return;
      }
    });
    if (!correoEncontrado) {
      empleados.forEach((empleado: any) => {
        if (empleado.correo_electronico === correo) {
          usuarioEncontrado=true;
          datosUsuario=empleado.value;
          console.log(datosUsuario);
          return; 
        }
      });
    }
    return usuarioEncontrado
  }

}
