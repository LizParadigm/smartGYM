import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '@shared/services/apiSimulada/obtener-datos.service';

@Component({
  selector: 'app-membresias-page',
  templateUrl: './membresias-page.component.html',
  styleUrl: './membresias-page.component.css'
})
export class MembresiasPageComponent implements OnInit{
  membresias: any;

  constructor(
    private obtenerdatos:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.membresias = this.obtenerdatos.membresias();
  }
}