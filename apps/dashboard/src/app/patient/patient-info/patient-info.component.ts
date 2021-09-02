import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientFacade } from '@patient-manager/core-state';
import { Patient } from "@patient-manager/api-interfaces";

@Component({
  selector: 'patient-manager-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {

  @Input() patient: Patient | null;


  constructor(
    private patientFacade: PatientFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/patients']);
  };

}
