import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@patient-manager/core-data';
import { PatientEffects } from './patients/patients.effects';
import { reducers } from ".";
import { NotificationEffects } from './patients/patients.notifications';


const store_name = 'Patient Store';


const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([PatientEffects, NotificationEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})

export class CoreStateModule {}