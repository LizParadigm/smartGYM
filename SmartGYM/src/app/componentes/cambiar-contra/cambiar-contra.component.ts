import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.component.html',
  styleUrls: ['./cambiar-contra.component.css']
})
export class CambiarContraComponent implements OnInit {
  @ViewChild('nuevaContrasenaInput') nuevaContrasenaInput: any; // ElementRef
  @ViewChild('confirmarContrasenaInput') confirmarContrasenaInput: any; // ElementRef

  mensajeError: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarContrasena() {
    const nuevaContrasena: string = this.nuevaContrasenaInput.nativeElement.value;
    const confirmarContrasena: string = this.confirmarContrasenaInput.nativeElement.value;

    // ... (resto de la lógica)
  }
}
