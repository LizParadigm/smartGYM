import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperarcuenta',
  templateUrl: './recuperarcuenta.component.html',
  styleUrls: ['./recuperarcuenta.component.css']
})
export class RecuperarcuentaComponent implements OnInit {
  datosRecuperacion!: FormGroup;
  mensajeExito!: string;
  mensajeError!: string;
  emailEnviado!: boolean; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datosRecuperacion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]]
    });
    this.emailEnviado = false; 
  }

  recuperarCuenta() {
    const email = this.datosRecuperacion.value.email;
    const confirmEmail = this.datosRecuperacion.value.confirmEmail;

    if (email !== confirmEmail) {
      this.mensajeError = 'Los correos electrónicos no coinciden.';
      return;
    }

    this.mensajeError = ''; 
    this.emailEnviado = true; 

    
    setTimeout(() => {
      this.mensajeExito = 'Se ha enviado un correo electrónico con instrucciones para recuperar su cuenta.';
      this.emailEnviado = false; 
    }, 3000); 
  }
}

