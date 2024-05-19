import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMembresiaComponent } from './delete-membresia.component';

describe('DeleteMembresiaComponent', () => {
  let component: DeleteMembresiaComponent;
  let fixture: ComponentFixture<DeleteMembresiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteMembresiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
