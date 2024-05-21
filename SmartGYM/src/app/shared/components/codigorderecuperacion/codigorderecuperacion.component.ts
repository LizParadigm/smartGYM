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
    
    this.codigoIncorrecto = true; // Cambio del valor de codigoIncorrecto a true
    verificarCodigo() {
      const codigoRecuperacion = this.datosRecuperacion.value.codigoRecuperacion;
    
      this.authService.verificarCodigoRecuperacion(codigoRecuperacion)
        .subscribe(respuesta => {
          if (respuesta.exito) {
            this.codigoIncorrecto = false;
            
           
          } else {
            this.codigoIncorrecto = true;
            
          }
        });
    }
    
  }

  reenviarCodigo() {
      const correoElectronico = this.datosRecuperacion.value.correoElectronico;
    
      this.authService.reenviarCodigoRecuperacion(correoElectronico)
        .subscribe(respuesta => {
          if (respuesta.exito) {
            // Mostrar mensaje de código reenviado
          } else {
            // Mostrar mensaje de error al reenviar código
          }
        });
    }
    
   
  }


  

