import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementUtilisateurComponent } from './logement-utilisateur.component';

describe('LogementUtilisateurComponent', () => {
  let component: LogementUtilisateurComponent;
  let fixture: ComponentFixture<LogementUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogementUtilisateurComponent]
    });
    fixture = TestBed.createComponent(LogementUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
