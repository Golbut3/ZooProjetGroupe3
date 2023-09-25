import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPresentationComponent } from './animalPresentation.component';

describe('AnimalPresentationComponent', () => {
  let component: AnimalPresentationComponent;
  let fixture: ComponentFixture<AnimalPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalPresentationComponent]
    });
    fixture = TestBed.createComponent(AnimalPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
