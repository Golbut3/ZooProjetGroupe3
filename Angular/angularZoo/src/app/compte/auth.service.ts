import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CompteHttpService } from './compte-http.service';
import { Compte } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private compteHttpService: CompteHttpService, private router: Router) { }

  authentification(username: string, password: string) {
    let user =this.compteHttpService.connexion(username, password);
      sessionStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/"]);
    };
  

  deconnexion() {
    sessionStorage.removeItem("user");
  }

  getUtilisateur(): Compte {
    let struser = sessionStorage.getItem("user");

    if(struser) {
      let utilisateur: Compte = JSON.parse(struser);

      return utilisateur
    }

    return null;
  }

  isAuthenticated(): boolean {
    return this.getUtilisateur() != null;
  }

 hasRole(role: string): boolean {

    if (this.getUtilisateur().type===role){
      return true
    }else{
      return false
    }
  }
}

