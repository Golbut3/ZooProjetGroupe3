import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletComponent } from './chalet.component';

describe('ChaletComponent', () => {
  let component: ChaletComponent;
  let fixture: ComponentFixture<ChaletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaletComponent]
    });
    fixture = TestBed.createComponent(ChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
