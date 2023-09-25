/*import { Injectable } from '@angular/core';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { Utilisateur } from './model';
import { UtilisateurHttpService } from './utilisateur/utilisateur-http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private utilisateurHttpService: UtilisateurHttpService, private router: Router) { }

  authentification(username: string, password: string) {
    this.utilisateurHttpService.connexion(username, password).subscribe(resp => {
      sessionStorage.setItem("user", JSON.stringify(resp));
      this.router.navigate(["/"]);
    });
  }

  deconnexion() {
    sessionStorage.removeItem("user");
  }

  getUtilisateur(): Utilisateur {
    let struser = sessionStorage.getItem("user");

    if(struser) {
      let utilisateur: Utilisateur = JSON.parse(struser);

      return utilisateur
    }

    return null;
  }

  isAuthenticated(): boolean {
    return this.getUtilisateur() != null;
  }

  hasRole(role: string): boolean {
    return this.getUtilisateur().roles.indexOf(role) > -1;
  }
}
*/
