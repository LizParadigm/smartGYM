import { descuento } from "./descuento.model";
import { Membresia } from "./membresia.model";

export interface Membresia_Registrada {
    id_membresia_registrada: number;
    membresia: Membresia;
    descuento: descuento;
    total_pagado: string;
    fecha_registro: string;
    fecha_expira: string;
}