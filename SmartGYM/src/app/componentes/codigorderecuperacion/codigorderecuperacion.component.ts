import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-codigorderecuperacion',
  templateUrl: './codigorderecuperacion.component.html',
  styleUrls: ['./codigorderecuperacion.component.css']
})
export class CodigorderecuperacionComponent implements OnInit {

  codigoIncorrecto: boolean = false; // Definición de la propiedad codigoIncorrecto

  datosRecuperacion: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.datosRecuperacion = this.formBuilder.group({
      codigoRecuperacion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  verificarCodigo() {
    // Aquí puedes realizar la lógica para verificar el código ingresado
    this.codigoIncorrecto = true; // Cambio del valor de codigoIncorrecto a true
  }

  reenviarCodigo() {
    // Aquí puedes realizar la lógica para reenviar el código de recuperación
  }

  confirmarRecuperacion() {
    // Aquí puedes realizar la lógica para confirmar la recuperación de la cuenta
  }
}
