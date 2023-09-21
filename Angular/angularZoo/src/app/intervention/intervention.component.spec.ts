import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionComponent } from './intervention.component';

describe('InterventionComponent', () => {
  let component: InterventionComponent;
  let fixture: ComponentFixture<InterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterventionComponent]
    });
    fixture = TestBed.createComponent(InterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
