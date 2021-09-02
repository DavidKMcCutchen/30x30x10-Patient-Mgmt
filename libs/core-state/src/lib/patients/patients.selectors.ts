import { emptyPatient } from "@patient-manager/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { patientAdapter, PatientState, PATIENT_FEATURE_KEY } from "./patients.reducer";

export const getPatientState = createFeatureSelector<PatientState>(PATIENT_FEATURE_KEY);

const { selectAll, selectEntities } = patientAdapter.getSelectors();

export const getPatientsLoaded = createSelector(
    getPatientState,
    (state: PatientState) => state.loaded
);

export const getPatientError = createSelector(
    getPatientState,
    (state: PatientState) => state.error
);

export const getAllPatients = createSelector(
    getPatientState,
    (state: PatientState) => selectAll(state)
);

export const getPatientEntities = createSelector(
    getPatientState,
    (state: PatientState) => selectEntities(state)
);

export const getSelectedPatientId = createSelector(
    getPatientState,
    (state: PatientState) => state.selectedId
);

export const getSelectedPatient = createSelector(
    getPatientEntities,
    getSelectedPatientId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPatient
);