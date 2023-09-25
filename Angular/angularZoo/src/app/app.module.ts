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
import { Espece } from './model';
import { AdminComponent } from './compte/admin/admin.component';
import { InteretComponent } from './interet/interet.component';
import { EmployeComponent } from './compte/employe/employe.component';
import { ClientComponent } from './compte/client/client.component';
import { AnimalComponent } from './animal/animal.component';
import { EspeceComponent } from './espece/espece.component';
<<<<<<< Updated upstream
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimalPresentationComponent } from './animalPresentation/animalPresentation.component';
=======
import { NavBarCompteComponent } from './compte/nav-bar-compte/nav-bar-compte.component';
import { GestionComponent } from './gestion/gestion.component';
import { InscriptionComponent } from './inscription/inscription.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    ReservationComponent,
    ChaletComponent,
    EnclosComponent,
    AdminComponent,
    InteretComponent,
    EmployeComponent,
    ClientComponent,
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    AnimalComponent,
    EspeceComponent,
<<<<<<< Updated upstream
    NavBarComponent,
    AnimalPresentationComponent,
=======
    NavBarCompteComponent,
    GestionComponent,
    InscriptionComponent

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
