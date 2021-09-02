import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Patient } from "@patient-manager/api-interfaces";
import { PatientsService } from "@patient-manager/core-data";
import * as PatientActions from './patients.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class PatientEffects{
    loadPatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.loadPatient),
            fetch({
                run: (action) =>
                    this.patientsService
                        .find(action.patientId)
                        .pipe(map((patient: Patient) => PatientActions.loadPatientSuccess({ patient }))),
                    onError: (action, error) => PatientActions.loadPatientFailed({ error })    
            })
        ));
    loadPatients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.loadPatients),
            fetch({
                run: () =>
                    this.patientsService
                    .all()
                    .pipe(
                        map((patients: Patient[]) => PatientActions.loadPatientsSuccess({ patients }))
                    ),
                onError: (action, error) => PatientActions.loadPatientsFailed({ error })    
            })
        ));
        createPatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.createPatient),
            pessimisticUpdate({
                run: (action) =>
                    this.patientsService
                        .create(action.patient)
                        .pipe(map((patient: Patient) => PatientActions.createPatientSuccess({ patient }))),
                    onError: (action, error) => PatientActions.createPatientFailed({ error })    
            })
    ));

    updatePatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.updatePatient),
            pessimisticUpdate({
                run: (action) =>
                    this.patientsService
                        .update(action.patient)
                        .pipe(map((patient: Patient) => PatientActions.updatePatientSuccess({ patient}))),
                    onError: (action, error) => PatientActions.updatePatientFailed({ error })    
            })
    ));

    deletePatient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientActions.deletePatient),
            pessimisticUpdate({
                run: (action) =>
                    this.patientsService
                        .delete(action.patient)
                        .pipe(
                            map(() => PatientActions.deletePatientSuccess({ patient: action.patient }))
                        ),
                    onError: (action, error) => PatientActions.deletePatientFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private patientsService: PatientsService
    ) {}    
}