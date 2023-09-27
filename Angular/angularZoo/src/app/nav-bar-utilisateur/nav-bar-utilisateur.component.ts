import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';

@Component({
  selector: 'nav-bar-utilisateur',
  templateUrl: './nav-bar-utilisateur.component.html',
  styleUrls: ['./nav-bar-utilisateur.component.css']
})
export class NavBarUtilisateurComponent {


  constructor(public authService: AuthService) {

  }

  deconnexion() {
   this.authService.deconnexion();
  }
}
