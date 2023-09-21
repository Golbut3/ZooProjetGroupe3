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




const routes: Routes = [
  {path: "compte", component: CompteComponent}, 
  {path: "reservation", component: ReservationComponent},
  {path : "compte/admin",component:AdminComponent},
  {path : "compte/employe",component:EmployeComponent},
  {path : "compte/client",component:ClientComponent},
  {path: "animal",component: AnimalComponent},
  {path: "enclos", component: EnclosComponent},
  {path: "interet", component: InteretComponent},

  {path: "espece", component: EspeceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
