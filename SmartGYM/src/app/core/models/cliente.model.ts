import { Membresia_Registrada } from "./membresia_registrada.model";

export interface Cliente {
  id_cliente: number;
  correo_electronico: string;
  contraseña: string;
  nombre: string;
  sexo: string;
  fecha_de_registro: string;
  estado_de_membresia: "activa" | "inactiva";
  membresia_registrada: Membresia_Registrada; //si el estado es inactivo, no habra membresia_registrada :3
  QR: string;
}
