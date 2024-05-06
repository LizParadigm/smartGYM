import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorEmpleadoComponent } from './identificador-empleado.component';

describe('IdentificadorEmpleadoComponent', () => {
  let component: IdentificadorEmpleadoComponent;
  let fixture: ComponentFixture<IdentificadorEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificadorEmpleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
