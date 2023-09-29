import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooMapComponent } from './zoo-map.component';

describe('ZooMapComponent', () => {
  let component: ZooMapComponent;
  let fixture: ComponentFixture<ZooMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZooMapComponent]
    });
    fixture = TestBed.createComponent(ZooMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
