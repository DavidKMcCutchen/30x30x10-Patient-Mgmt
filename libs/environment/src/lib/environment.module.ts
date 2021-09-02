import { NgModule, ModuleWithProviders } from '@angular/core';
import { PATIENT_ENVIRONMENT } from './patients.token';
import { PatientEnvironment } from "./patients.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PatientEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PATIENT_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}