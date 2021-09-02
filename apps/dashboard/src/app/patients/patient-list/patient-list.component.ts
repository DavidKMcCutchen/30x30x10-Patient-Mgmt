import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from "@patient-manager/api-interfaces";

@Component({
  selector: 'patient-manager-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  @Input() patients: Patient[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() patientViewed = new EventEmitter();
}
