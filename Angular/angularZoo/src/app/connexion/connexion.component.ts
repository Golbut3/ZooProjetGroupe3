import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  username: string;
  password: string;
  constructor(private authHttpService: AuthService, private router : Router) {
 
  }
  
  
  auth() {
    this.authHttpService.authentification(this.username, this.password);
    console.log(this.authHttpService.getUtilisateur())
    this.router.navigate([ '/accueil' ]);
  }
  
  }
  