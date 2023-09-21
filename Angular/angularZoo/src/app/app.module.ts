import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    ReservationComponent,
    EnclosComponent,
    ChaletComponent,
    EnclosComponent,
    AdminComponent,
    InteretComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
