import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { MaterialModule } from "@patient-manager/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@patient-manager/core-data";
import { CoreStateModule } from "@patient-manager/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@patient-manager/environment';
import { UiLoginModule } from '@patient-manager/ui-login';
import { PatientComponent } from './patient/patient.component';
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';

@NgModule({
  declarations: [AppComponent, PatientsComponent, PatientDetailsComponent, PatientListComponent, PatientInfoComponent, PatientComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
