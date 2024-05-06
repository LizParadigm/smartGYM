import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrandoComponent } from './registrando.component';

describe('RegistrandoComponent', () => {
  let component: RegistrandoComponent;
  let fixture: ComponentFixture<RegistrandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrandoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
