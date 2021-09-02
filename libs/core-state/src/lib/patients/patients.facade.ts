import { Injectable } from "@angular/core";
import { Patient } from "@patient-manager/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as PatientActions from './patients.actions';
import * as PatientSelectors from './patients.selectors';
import * as fromPatients from './patients.reducer';


@Injectable({
    providedIn: 'root'
})

export class PatientFacade {
    allPatients$ = this.store.pipe(
        map((state) => PatientSelectors.getAllPatients(state)),
    )
    selectedPatients$ = this.store.pipe(select(PatientSelectors.getSelectedPatient));
    loaded$ = this.store.pipe(select(PatientSelectors.getPatientsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === PatientActions.createPatient({} as any) .type ||
        action.type === PatientActions.updatePatient({} as any) .type ||
        action.type === PatientActions.deletePatient({} as any) .type 
        ))

        selectPatient(patientId: string) {
            this.dispatch(PatientActions.selectPatient({ patientId }));
        };

        loadPatients() {
            this.dispatch(PatientActions.loadPatients())
        };

        loadPatient(patientId: string) {
            this.dispatch(PatientActions.loadPatient({ patientId }))
        };

        savePatient(patient: Patient) {
            patient.id ? this.updatePatient(patient) : this.createPatient(patient)
        };

        createPatient(patient: Patient) {
            this.dispatch(PatientActions.createPatient({ patient }))
        };

        updatePatient(patient: Patient) {
            this.dispatch(PatientActions.updatePatient({ patient }))
        };

        deletePatient(patient: Patient) {
            this.dispatch(PatientActions.deletePatient({ patient }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromPatients.PatientPartialState>,
            private actions$: ActionsSubject
        ) {}
}