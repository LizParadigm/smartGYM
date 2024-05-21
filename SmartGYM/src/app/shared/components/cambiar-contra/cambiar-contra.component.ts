import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.component.html',
  styleUrls: ['./cambiar-contra.component.css']
})
export class CambiarContraComponent implements OnInit {
  datosRecuperacion: FormGroup;
  mensajeError: string = ''; 

  constructor(private fb: FormBuilder) {
    this.datosRecuperacion = this.fb.group({});
  }

  ngOnInit() {
    this.datosRecuperacion = this.fb.group({
      correo: ['', Validators.required],
      contrasenaActual: ['', Validators.required],
      nuevaContrasena: ['', Validators.required],
      confirmarNuevaContrasena: ['', Validators.required] 
    });
  }

  confirmarNuevaContrasena() {
    
    console.log('Nueva contraseña confirmada');
  }
}

