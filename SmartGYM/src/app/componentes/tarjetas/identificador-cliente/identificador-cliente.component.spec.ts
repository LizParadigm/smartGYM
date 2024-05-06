import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorClienteComponent } from './identificador-cliente.component';

describe('IdentificadorClienteComponent', () => {
  let component: IdentificadorClienteComponent;
  let fixture: ComponentFixture<IdentificadorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentificadorClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
