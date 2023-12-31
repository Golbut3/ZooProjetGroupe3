import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnclosComponent } from './enclos/enclos.component';
import { ChaletComponent } from './chalet/chalet.component';
import { AdminComponent } from './compte/admin/admin.component';
import { InteretComponent } from './interet/interet.component';
import { EmployeComponent } from './compte/employe/employe.component';
import { ClientComponent } from './compte/client/client.component';
import { AnimalComponent } from './animal/animal.component';
import { EspeceComponent } from './espece/espece.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimalPresentationComponent } from './animalPresentation/animalPresentation.component';
import { NavBarCompteComponent } from './compte/nav-bar-compte/nav-bar-compte.component';
import { GestionComponent } from './gestion/gestion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarUtilisateurComponent } from './nav-bar-utilisateur/nav-bar-utilisateur.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { BilleterieReservationComponent } from './billeterie-reservation/billeterie-reservation.component';
import { FooterUtilisateurComponent } from './footer-utilisateur/footer-utilisateur.component';
import { LogementUtilisateurComponent } from './logement-utilisateur/logement-utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import correct ici
import { LogementComponent } from './logement/logement.component';
import { MentionLegaleComponent } from './mention-legale/mention-legale.component';
import { InterventionComponent } from './intervention/intervention.component';
import { ZooMapComponent } from './zoo-map/zoo-map.component';


@NgModule({
  declarations: [
    AppComponent,
    MentionLegaleComponent,
    LogementUtilisateurComponent,
    CompteComponent,
    ReservationComponent,
    ChaletComponent,
    EnclosComponent,
    AdminComponent,
    InteretComponent,
    EmployeComponent,
    ClientComponent,
    AnimalComponent,
    EspeceComponent,
    NavBarUtilisateurComponent,
    AccueilComponent,
    NavBarComponent,
    AnimalPresentationComponent,
    NavBarComponent,
    BilleterieComponent,
    BilleterieReservationComponent,
    FooterUtilisateurComponent,
  LogementComponent,
  LogementUtilisateurComponent,
    InterventionComponent,
    NavBarCompteComponent,
    GestionComponent,
    InscriptionComponent,

    ConnexionComponent,
    MesReservationsComponent,
    MentionLegaleComponent,
  
    ConnexionComponent,
    ReservationComponent,
NavBarUtilisateurComponent,
InterventionComponent,
    ReservationComponent,
    ZooMapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
