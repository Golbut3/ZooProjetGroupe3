import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public authService: AuthService) {

  }

  deconnexion() {
   this.authService.deconnexion();
  }
}
