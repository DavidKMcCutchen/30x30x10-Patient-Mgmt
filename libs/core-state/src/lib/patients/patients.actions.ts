import { createAction, props } from "@ngrx/store";
import {  Patient } from "@patient-manager/api-interfaces";

// Select Entity

export const selectPatient = createAction(
    '[PATIENT] Select Patient',
    props<{ patientId: string }>()
);

// Load all Entities

export const loadPatients = createAction(
    '[PATIENT] Load Patients'
);

export const loadPatientsSuccess = createAction(
    '[PATIENT] Load Patients Success',
    props<{ patients: Patient[]}>()
);

export const loadPatientsFailed = createAction(
    '[PATIENT] Load Patients Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadPatient = createAction(
    '[PATIENT] Load Patient',
    props<{ patientId: string}>()
);

export const loadPatientSuccess = createAction(
    '[PATIENT] Load Patient Success',
    props<{ patient: Patient}>()
);

export const loadPatientFailed = createAction(
    '[PATIENT] Load Patient Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createPatient = createAction(
    '[PATIENT] Create Patient',
    props<{ patient: Patient}>()
);

export const createPatientSuccess = createAction(
    '[PATIENT] Create Patient Success',
    props<{ patient: Patient}>()
);

export const createPatientFailed = createAction(
    '[PATIENT] Create Patient Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updatePatient = createAction(
    '[PATIENT] Update Patient',
    props<{ patient: Patient}>()
);

export const updatePatientSuccess = createAction(
    '[PATIENT] Update Patient Success',
    props<{ patient: Patient}>()
);

export const updatePatientFailed = createAction(
    '[PATIENT] Create Patient Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deletePatient = createAction(
    '[PATIENT] Delete Patient',
    props<{ patient: Patient}>()
);

export const deletePatientSuccess = createAction(
    '[PATIENT] Delete Patient Success',
    props<{ patient: Patient}>()
);

export const deletePatientFailed = createAction(
    '[PATIENT] Create Patient Failed',
    props<{ error: any}>()
);