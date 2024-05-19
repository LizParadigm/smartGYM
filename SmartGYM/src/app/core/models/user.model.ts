import { Cliente } from "./cliente.model";
import { Empleado } from "./empleado.model";

export interface UsersData {
    clientes: Cliente[];
    empleados: Empleado[];
  }
  
  