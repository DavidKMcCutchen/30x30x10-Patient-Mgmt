import { ActionReducerMap } from "@ngrx/store";
import * as fromPatients from './patients/patients.reducer';

export interface AppState {
    [fromPatients.PATIENT_FEATURE_KEY]: fromPatients.PatientState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromPatients.PATIENT_FEATURE_KEY]: fromPatients.patientReducer
};