import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarMembresiaComponent } from './comprar-membresia.component';

describe('ComprarMembresiaComponent', () => {
  let component: ComprarMembresiaComponent;
  let fixture: ComponentFixture<ComprarMembresiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarMembresiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
