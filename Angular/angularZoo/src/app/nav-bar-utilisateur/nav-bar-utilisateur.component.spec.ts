import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUtilisateurComponent } from './nav-bar-utilisateur.component';

describe('NavBarUtilisateurComponent', () => {
  let component: NavBarUtilisateurComponent;
  let fixture: ComponentFixture<NavBarUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarUtilisateurComponent]
    });
    fixture = TestBed.createComponent(NavBarUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
