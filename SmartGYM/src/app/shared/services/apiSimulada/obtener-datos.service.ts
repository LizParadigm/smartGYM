import { Injectable } from '@angular/core';
import * as respuestaLM from '@data/membresiasList.json';
import * as respuestaLU from '@data/users.json'
import { Cliente } from 'src/app/core/models/cliente.model';
import { Empleado } from 'src/app/core/models/empleado.model';
import { Membresia } from 'src/app/core/models/membresia.model';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor() { }

  membresias() {
    console.log('adquiriendo lista de membresias')
    return (respuestaLM as any).default;
  }

  usuario(): [(Cliente | Empleado), string] {
    console.log('adquiriendo usuario');
    const { clientes, empleados }: any = (respuestaLU as any).default;
    let correo: string = 'empleado1@example.com';
    let datosUsuario: Cliente | Empleado = clientes;
    let tipoUs: string = '';
    let encontrado: boolean = false;

    clientes.forEach((cliente: Cliente) => {
      if (cliente.correo_electronico === correo) {
        datosUsuario = cliente;
        tipoUs = 'cliente';
        encontrado = true;
        return;
      }
    });

    if (!encontrado) {
      empleados.forEach((empleado: Empleado) => {
        if (empleado.correo_electronico === correo) {
          datosUsuario = empleado;
          tipoUs = 'empleado';
          return;
        }
      });
    }

    return [datosUsuario, tipoUs];
  }

  eliminarMembresia(id_membresia:number, id_usuario: number, tipoUsuario:string): boolean{
    //se envia la id del usuario y que tipo de usuario
    //es para encontrarlo en la base de datos, tambien
    //se envia la id de la membresia para confirmar la
    //coherencia. como resultado se espera un mensaje
    //del servidor diciendo si el proceso fue exitoso
    //o no
    return false;
  }
}
