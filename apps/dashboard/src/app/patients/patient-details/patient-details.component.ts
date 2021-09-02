import { Patient } from '@patient-manager/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'patient-manager-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  currentPatient: Patient;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set patient(value) {
    if (value) this.originalTitle = value.name;
    this.currentPatient = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
