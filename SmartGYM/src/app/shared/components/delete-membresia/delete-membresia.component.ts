import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ObtenerDatosService } from '@shared/services/apiSimulada/obtener-datos.service';

@Component({
  selector: 'app-delete-membresia',
  templateUrl: './delete-membresia.component.html',
  styleUrl: './delete-membresia.component.css'
}) 

export class DeleteMembresiaComponent implements OnInit{
  @Input() estado_membresia!: string;
  @Input() nombre!: string;
  @Input() id_membresia!: number;
  @Input() id_usuario!: number;
  @Input() tipoUsuario!: string;
  textB1:string = 'Cancelar';
  membresiaCancelada: boolean= false;
  cuerpoPredeterminado: boolean = true; 

  constructor(
    private esteComponente: DialogRef,
    private simularApi: ObtenerDatosService
  ) {}

  ngOnInit(): void {
    if (this.estado_membresia === 'inactiva'){
      this.textB1='Salir'
    }
  }

  eliminarMembresia() {
    this.cuerpoPredeterminado= false;
    this.membresiaCancelada = this.simularApi.eliminarMembresia(this.id_membresia, this.id_usuario, this.tipoUsuario);
  }

  cerrar() {
    this.esteComponente.close();
  }
}