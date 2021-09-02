import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientFacade } from '@patient-manager/core-state';

@Component({
  selector: 'patient-manager-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  currentPatient$ = this.patientFacade.selectedPatients$
  

  constructor(
    private patientFacade: PatientFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const patientId = this.route.snapshot.params.id;
    this.loadPatient(patientId);
  }

  loadPatient(patientId: string) {
    this.patientFacade.selectPatient(patientId);
    this.patientFacade.loadPatient(patientId);
  }

  navigateBack() {
    this.router.navigate(['/patients']);
  };

}
