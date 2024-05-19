import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeErrorService } from '@shared/services/mensajeError/mensaje-error.service';

@Component({
  selector: 'app-comprar-membresia',
  templateUrl: './comprar-membresia.component.html',
  styleUrl: './comprar-membresia.component.css'
})
export class ComprarMembresiaComponent implements OnInit {
  datosCompra!: FormGroup;
  errorNumeroDeTarjeta: string = '';
  errorFecha: string = '';
  errorCvv: string = '';
  errorTitular: string = '';

  constructor(
    private dialog: DialogRef,
    private fb:FormBuilder,
    private mensajeError:MensajeErrorService
  ) { }

  ngOnInit(): void {
    this.datosCompra = this.fb.group({
      numeroDeTarjeta:['',[
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(16),
      ]],
      expira:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      codigo_cvv:['',[
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(4)
      ]],
      titular:['',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
      ]]
    })
  }

//investigar como mejorar el proceso de validacion y enviar mensajes de error
  comprar() {
    this.mensajesError();
    if (this.datosCompra.valid){
      console.log('la compra fue exitosa');
    }
    else{
      console.log('ha ocurrido un error durante el proceso');
    }
  }

  salir() {
    this.dialog.close()
  }

  mensajesError(){
    this.errorNumeroDeTarjeta=this.mensajeError.ingresarNumerosDeTarjeta(
      this.datosCompra.get('numeroDeTarjeta')?.hasError('required') ?? false,
      this.datosCompra.get('numeroDeTarjeta')?.hasError('pattern') ?? false,
      this.datosCompra.get('numeroDeTarjeta')?.hasError('minlength') ?? false
    )

    this.errorFecha=this.mensajeError.ingresarFechaExpiraTarjeta(
      this.datosCompra.get('expira')?.hasError('required') ?? false,
      this.datosCompra.get('expira')?.hasError('minlength') ?? false
    )
    
    this.errorCvv=this.mensajeError.ingresarCvv(
      this.datosCompra.get('codigo_cvv')?.hasError('required') ?? false,
      this.datosCompra.get('codigo_cvv')?.hasError('pattern') ?? false,
      this.datosCompra.get('codigo_cvv')?.hasError('minlength') ?? false
    )


    this.errorTitular=this.mensajeError.ingresarTitular(
      this.datosCompra.get('titular')?.hasError('required') ?? false,
      this.datosCompra.get('titular')?.hasError('pattern') ?? false
    )
  }
}