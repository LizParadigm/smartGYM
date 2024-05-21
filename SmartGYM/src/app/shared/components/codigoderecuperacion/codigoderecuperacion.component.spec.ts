import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoderecuperacionComponent } from './codigoderecuperacion.component';

describe('CodigoderecuperacionComponent', () => {
  let component: CodigoderecuperacionComponent;
  let fixture: ComponentFixture<CodigoderecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoderecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigoderecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
