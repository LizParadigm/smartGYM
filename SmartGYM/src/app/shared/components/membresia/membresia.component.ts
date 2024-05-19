import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ComprarMembresiaComponent } from '../comprar-membresia/comprar-membresia.component';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrl: './membresia.component.css'
})
export class MembresiaComponent implements OnInit{
  @Input() id!: number; 
  @Input() nombre!:string;
  @Input() descripcion!: string;
  @Input() duraccion!: string ;
  @Input() precio!: string;
  @Input() id_membresiaAdquirida!: number;
  tipoUsuario: string = 'cliente';

  constructor(
    public dialog: Dialog
  ) {}

  ngOnInit(): void {
  }

  comprar(){
    if (this.tipoUsuario === 'mostrador'){
      // se abrira el componente de compra
    }
    else {
      this.dialog.open(ComprarMembresiaComponent);
    }
  }
}
