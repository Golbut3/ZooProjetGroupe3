import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';
import { Compte } from '../model';
import { CompteHttpService } from '../compte/compte-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  username: string;
  password: string;
  constructor(private authHttpService: AuthService) {
  }
  
  auth() {
    this.authHttpService.authentification(this.username, this.password);
    console.log(this.authHttpService.getUtilisateur().nom)
  }
  
  }
  