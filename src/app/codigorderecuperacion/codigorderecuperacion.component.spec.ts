import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigorderecuperacionComponent } from './codigorderecuperacion.component';

describe('CodigorderecuperacionComponent', () => {
  let component: CodigorderecuperacionComponent;
  let fixture: ComponentFixture<CodigorderecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigorderecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigorderecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
