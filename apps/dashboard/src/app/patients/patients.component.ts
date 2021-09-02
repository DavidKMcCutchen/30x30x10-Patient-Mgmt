import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Patient, emptyPatient } from '@patient-manager/api-interfaces';
import { PatientFacade } from '@patient-manager/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'patient-manager-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  allPatients$: Observable<Patient[]> = this.patientFacade.allPatients$;
  selectedPatient$: Observable<Patient> = this.patientFacade.selectedPatients$;

  form: FormGroup;

  constructor(
    private patientFacade: PatientFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.patientFacade.mutations$.subscribe((_) => this.resetPatient());
  }

  ngOnInit() {
    this.initForm();
    this.patientFacade.loadPatients();
    this.resetPatient()

    const patientRouteId = this.route.snapshot.params['id'];

    if (patientRouteId) {
      this.loadPatient((patientRouteId))
    }
  }

  viewPatient(patientId: string) {
    this.router.navigate(["patients", patientId])
  }

  loadPatient(patientId: string) {
    this.patientFacade.selectPatient(patientId);
    this.patientFacade.loadPatient(patientId);
  }

  selectPatient(patient: Patient) {
    this.patientFacade.selectPatient(patient.id)
    this.form.patchValue(patient);
  }

  savePatient(patient: Patient) {
    this.patientFacade.savePatient(patient);
  }

  deletePatient(patient: Patient) {
    this.patientFacade.deletePatient(patient);
  }

  resetPatient() {
    this.form.reset();
    this.selectPatient(emptyPatient)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      dateOfBirth: [''],
      placeOfBirth: [''],
      occupation: [''],
      iq: [''],
      banished: ['']
    })
  }
}
