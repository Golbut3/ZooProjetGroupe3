import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EnclosComponent } from './enclos/enclos.component';


const routes: Routes = [
  {path: "compte", component: CompteComponent}, 
  {path: "reservation", component: ReservationComponent},
  {path: "enclos", component: EnclosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
