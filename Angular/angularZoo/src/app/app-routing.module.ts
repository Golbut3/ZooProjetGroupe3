import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EnclosComponent } from './enclos/enclos.component';
import { AnimalComponent } from './animal/animal.component';
import { AdminComponent } from './compte/admin/admin.component';
import { InteretComponent } from './interet/interet.component';
import { EmployeComponent } from './compte/employe/employe.component';
import { ClientComponent } from './compte/client/client.component';
import { EspeceComponent } from './espece/espece.component';
import { AnimalPresentationComponent } from './animalPresentation/animalPresentation.component';
import { GestionComponent } from './gestion/gestion.component';
import { InscriptionComponent } from './inscription/inscription.component';
//import { LogementComponent } from './logement/logement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { BilleterieReservationComponent } from './billeterie-reservation/billeterie-reservation.component';
import { LogementUtilisateurComponent } from './logement-utilisateur/logement-utilisateur.component';
import { LogementComponent } from './logement/logement.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';
import { authGuard } from './auth.guard';





const routes: Routes = [
  {path: "compte", component: CompteComponent, canActivate: [authGuard]}, 
  {path: "reservation", component: ReservationComponent, canActivate: [authGuard]},
  {path : "compte/admin",component:AdminComponent, canActivate: [authGuard]},
  {path : "compte/employe",component:EmployeComponent, canActivate: [authGuard]},
  {path : "compte/client",component:ClientComponent, canActivate: [authGuard]},
  {path: "animal",component: AnimalComponent, canActivate: [authGuard]},
  {path: "enclos", component: EnclosComponent, canActivate: [authGuard]},
  {path: "interet", component: InteretComponent, canActivate: [authGuard]},
  {path : "gestion",component:GestionComponent, canActivate: [authGuard]},
  {path : "logement",component:LogementComponent, canActivate: [authGuard]},
  {path: "espece", component: EspeceComponent, canActivate: [authGuard]},
  {path:"inscription",component:InscriptionComponent},
  {path: "animalPresentation", component: AnimalPresentationComponent},
  {path:"mesReservations",component:MesReservationsComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "billeterie", component: BilleterieComponent},
  {path: "billeterie-reservation", component: BilleterieReservationComponent},
  {path:"connexion",component:ConnexionComponent},
  {path: "logement-utilisateur", component: LogementUtilisateurComponent}, 
  {path: "nav-bar", component:NavBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
