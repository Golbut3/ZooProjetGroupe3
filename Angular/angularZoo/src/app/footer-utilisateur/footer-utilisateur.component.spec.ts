import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUtilisateurComponent } from './footer-utilisateur.component';

describe('FooterUtilisateurComponent', () => {
  let component: FooterUtilisateurComponent;
  let fixture: ComponentFixture<FooterUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterUtilisateurComponent]
    });
    fixture = TestBed.createComponent(FooterUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
