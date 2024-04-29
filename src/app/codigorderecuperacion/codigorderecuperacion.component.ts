import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-codigorderecuperacion',
  templateUrl: './codigorderecuperacion.component.html',
  styleUrl: './codigorderecuperacion.component.css'
})
export class CodigorderecuperacionComponent implements OnInit {

  codigoIncorrectoVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  verificarCodigo() {
    
    this.codigoIncorrectoVisible = true;
  }

  reenviarCodigo() {
    
  }
}


