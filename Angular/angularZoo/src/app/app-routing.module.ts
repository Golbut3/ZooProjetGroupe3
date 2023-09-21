import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EnclosComponent } from './enclos/enclos.component';
import { AnimalComponent } from './animal/animal.component';
import { AdminComponent } from './compte/admin/admin.component';


const routes: Routes = [
  {path: "compte", component: CompteComponent}, 
  {path: "reservation", component: ReservationComponent},
  {path: "enclos", component: EnclosComponent},
  {path: "animal",component: AnimalComponent},
  {path : "compte/admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
