import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMembresiasComponent } from './tienda-membresias.component';

describe('TiendaMembresiasComponent', () => {
  let component: TiendaMembresiasComponent;
  let fixture: ComponentFixture<TiendaMembresiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaMembresiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
