import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent, WildComponent } from "@patient-manager/ui-login";
import { PatientComponent } from './patient/patient.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'patients/:id', component: PatientComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
