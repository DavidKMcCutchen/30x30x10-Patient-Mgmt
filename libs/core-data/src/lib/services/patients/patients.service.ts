import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Patient } from "@patient-manager/api-interfaces";
import { PatientEnvironment, PATIENT_ENVIRONMENT } from "@patient-manager/environment";


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  model = 'patients';

  constructor(
    private httpClient: HttpClient,
    @Inject(PATIENT_ENVIRONMENT) private environment: PatientEnvironment
  ) {}

  all() {
    return this.httpClient.get<Patient[]>(this.getUrl())
  };

  find(patientId: string) {
    return this.httpClient.get<Patient>(this.getUrlById(patientId))
  };

  create(patients: Patient) {
    return this.httpClient.post<Patient>(this.getUrl(), patients)
  };

  update(patients: Patient) {
    return this.httpClient.patch<Patient>(this.getUrlById(patients.id), patients)
  };

  delete({ id }: Patient) {
    return this.httpClient.delete<Patient>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}