import { Membresia_Registrada } from "./membresia_registrada.model";
import { Puesto } from "./puesto.model";

export interface Empleado {
  id_empleado: number;
  correo_electronico: string;
  contraseña: string;
  nombre: string;
  sexo: string;
  fecha_de_contratacion: string;
  puesto: Puesto;
  id_puesto: number;
  estado_de_membresia: boolean;
  membresia_registrada: Membresia_Registrada; //si el estado es inactivo, no habra membresia_registrada :3
  QR: string;
}
