import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { MensajeErrorService } from '@shared/services/mensajeError/mensaje-error.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit{
  /*atributos*/
  errorNombre: string = "";
  errorCorreoElectronico: string = "";
  errorContrasena: string = "";
  errorConfirmarContrasena: string = "";
  errorSexo: string = "";
  correoExistente: boolean=false;

  botonAccesible:boolean=true;

  forma!:FormGroup;

  
  /*constructor*/
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private mensajeError:MensajeErrorService,
    private authservice: AuthService
  ){
  }

  /*cliclo inicio*/
  ngOnInit(): void {
    this.forma = this.fb.group({
      nombre:['',[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z\s]+$/)]
      ],

      correoElectronico:['',[
        Validators.required,
        Validators.email],
      ],

      contrasena:['',[
        Validators.required,
        Validators.minLength(8)],
      ],

      confirmarContrasena:['',[
        Validators.required],
      ],

      sexo:['',[
        Validators.required],
      ],

      politicasDePrivacidad:[false],

      usosYCondiciones:[false]
    })

    this.forma.get('politicasDePrivacidad')?.valueChanges.subscribe((politicas) => {
      this.botonAccesible = !(politicas && this.forma.get('usosYCondiciones')?.value);
    });
  
    this.forma.get('usosYCondiciones')?.valueChanges.subscribe((usos) => {
      this.botonAccesible = !(this.forma.get('politicasDePrivacidad')?.value && usos);
    });
  }

  validarParentesco(){
    return this.forma.get('contrasena')?.value===this.forma.get('confirmarContrasena')?.value;
  }
  
  /*botones*/
  registrar(){
    this.correoExistente = this.authservice.validarCorreoElectronicoExistente(this.forma.get('correoElectronico')?.value)
    console.log('el correo existe: ',this.correoExistente)
    this.mensajesError();
    if (this.forma.valid && this.validarParentesco() && !this.authservice.validarCorreoElectronicoExistente(this.forma.get('correoElectronico')?.value )){
      if(this.authservice.registrarUser((this.forma.value), 'cliente')) {
        this.router.navigateByUrl('/home/identificacion')
      }
      else{
        //notificacion error con servicios terceros
      }
    }
  }

  //mensajes de error
  //consultar si se deberia fragmentar de un solo metodo de mensajes de error, a un metodo para cada atributo "error..."
  mensajesError(){
    this.errorNombre = this.mensajeError.registrarNombre(
      (this.forma.get('nombre')?.hasError('required') ?? false),
      (this.forma.get('nombre')?.hasError('pattern') ?? false),
      (this.forma.get('nombre')?.hasError('minlength') ?? false)
    );

    this.errorCorreoElectronico = this.mensajeError.registrarCorreo(
      (this.forma.get('correoElectronico')?.hasError('required') ?? false),
      (this.forma.get('correoElectronico')?.hasError('email') ?? false),
      (this.correoExistente)
    );

    this.errorContrasena = this.mensajeError.registrarContrasena(
      (this.forma.get('contrasena')?.hasError('required') ?? false),
      (this.forma.get('contrasena')?.hasError('minlength') ?? false)
    )

    this.errorConfirmarContrasena = this.mensajeError.registrarConfirmarContrasena(
      this.forma.get('confirmarContrasena')?.hasError('required') ?? false,
      this.validarParentesco()
    )

    this.errorSexo = this.mensajeError.registrarSexo(
      (this.forma.get('sexo')?.hasError('required') ?? false)
    )
  }


  //redireccionar al home
  entrarALaCuenta():void{
    let tipoUsuario: string = 'llamar al servicio que detecta el tipo de usuario';
    switch (tipoUsuario) {
      case 'cliente':
        this.router.navigateByUrl('c/home');
        break;
      case 'empleado':
        this.router.navigateByUrl('e/home');
        break;
      case 'administrador':
        this.router.navigateByUrl('a/home');
        break;
    }
  }
  

}

