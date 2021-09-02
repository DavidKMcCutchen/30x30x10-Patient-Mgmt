import { Patient } from "@patient-manager/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PatientActions from './patients.actions';

export const PATIENT_FEATURE_KEY = 'patients';

export interface PatientState extends EntityState<Patient> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface PatientPartialState {
    readonly [PATIENT_FEATURE_KEY]: PatientState
};

export const patientAdapter: EntityAdapter<Patient> = createEntityAdapter<Patient>();

export const initialPatientState: PatientState = patientAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): PatientState => ({ ...state, error});

const onDispatch = (state, action): PatientState => ({
    ...state,
    loaded: false,
    error: null
});

const _patientReducer = createReducer(
    initialPatientState,
    on(
        PatientActions.loadPatientFailed,
        PatientActions.loadPatientsFailed,
        PatientActions.createPatientFailed,
        PatientActions.updatePatientFailed,
        PatientActions.deletePatientFailed,
        onFailed
    ),
    on(
        PatientActions.loadPatient,
        PatientActions.loadPatients,
        PatientActions.createPatient,
        PatientActions.updatePatient,
        PatientActions.deletePatient,
        onDispatch
    ),
    on(
        PatientActions.loadPatientSuccess, (state, { patient }) =>
        patientAdapter.upsertOne(patient, {...state, loaded: true})
    ),
    on(
        PatientActions.selectPatient, (state, { patientId }) => ({
            ...state,
            selectedId: patientId
        })
    ),
    on(
        PatientActions.loadPatientsSuccess, (state, { patients }) =>
        patientAdapter.setAll(patients, {...state, loaded: true})
    ),
    on(
        PatientActions.deletePatientSuccess, (state, { patient }) =>
        patientAdapter.removeOne(patient.id, {...state, loaded: true})
    ),
    on(
        PatientActions.updatePatientSuccess, (state, { patient }) =>
        patientAdapter.updateOne(
            {id: patient.id, changes: patient},
            {...state, loaded: true}
        )
    ),
    on(
        PatientActions.createPatientSuccess, (state, {patient }) =>
        patientAdapter.addOne(patient, {...state, loaded: true})
    ),
)

export function patientReducer(
    state: PatientState | undefined,
    action: Action
) {
    return _patientReducer(state, action)
}