import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCompteComponent } from './nav-bar-compte.component';

describe('NavBarCompteComponent', () => {
  let component: NavBarCompteComponent;
  let fixture: ComponentFixture<NavBarCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarCompteComponent]
    });
    fixture = TestBed.createComponent(NavBarCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
