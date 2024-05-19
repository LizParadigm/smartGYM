import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RutService } from '@shared/services/rut/rut.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  tituloHeader: string = '';

  //constructores
  constructor(
    private router:Router,
    public rut:RutService
  ){
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.tituloHeader = this.rut.tituloHeader();
      }
    });

  }

  ngOnInit(): void {
    // this.tituloHeader=this.rut.tituloHeader();
  }

  //metodos
}
