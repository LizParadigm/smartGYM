import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recuperarcuenta',
  templateUrl: './recuperarcuenta.component.html',
  styleUrls: ['./recuperarcuenta.component.css']
})
export class TuComponenteComponent implements OnInit {
  datosRecuperacion!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datosRecuperacion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]]
    });
  }

  recuperarCuenta() {
    // Lógica para recuperar la cuenta
    // Puedes acceder a los valores del formulario utilizando this.datosRecuperacion.value
  }
}
