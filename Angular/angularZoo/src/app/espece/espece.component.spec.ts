import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceComponent } from './espece.component';

describe('EspeceComponent', () => {
  let component: EspeceComponent;
  let fixture: ComponentFixture<EspeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspeceComponent]
    });
    fixture = TestBed.createComponent(EspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
