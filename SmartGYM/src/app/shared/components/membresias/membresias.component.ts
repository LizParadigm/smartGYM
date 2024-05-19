import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '@shared/services/apiSimulada/obtener-datos.service';

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.css'
})
export class MembresiasComponent implements OnInit{
  membresias: any;

  constructor(
    private obtenerdatos:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.membresias = this.obtenerdatos.membresias();
  }
}
