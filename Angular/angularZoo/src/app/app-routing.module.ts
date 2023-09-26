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
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';
//import { LogementComponent } from './logement/logement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { BilleterieReservationComponent } from './billeterie-reservation/billeterie-reservation.component';
import { LogementUtilisateurComponent } from './logement-utilisateur/logement-utilisateur.component';
import { LogementComponent } from './logement/logement.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';





const routes: Routes = [
  {path: "compte", component: CompteComponent}, 
  {path: "reservation", component: ReservationComponent},
  {path : "compte/admin",component:AdminComponent},
  {path : "compte/employe",component:EmployeComponent},
  {path : "compte/client",component:ClientComponent},
  {path: "animal",component: AnimalComponent},
  {path: "enclos", component: EnclosComponent},
  {path: "interet", component: InteretComponent},
  {path : "gestion",component:GestionComponent},
  {path : "logement",component:LogementComponent},
  {path: "espece", component: EspeceComponent},
  //{path : "logement",component: LogementComponent},
  {path:"inscription",component:InscriptionComponent},
  {path: "animalPresentation", component: AnimalPresentationComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "billeterie", component: BilleterieComponent},
  {path: "billeterie-reservation", component: BilleterieReservationComponent},
  {path:"connexion",component:ConnexionComponent},
  {path: "logement-utilisateur", component: LogementUtilisateurComponent}, 
  {path:"connexion",component:ConnexionComponent},
  {path: "nav-bar", component:NavBarComponent},
  {path: "nav-bar", component:NavBarComponent},
  {path : "mesReservations",component:MesReservationsComponent}

  {path:"mesReservations",component:MesReservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
