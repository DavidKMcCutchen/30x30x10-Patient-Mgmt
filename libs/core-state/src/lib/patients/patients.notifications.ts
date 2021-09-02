import { Injectable } from '@angular/core';
import { NotificationsService } from '@patient-manager/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as PatientsActions from './patients.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PatientsActions.createPatientSuccess),
        tap(() => this.notificationService.notify('Create Patient Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PatientsActions.updatePatientSuccess),
        tap(() => this.notificationService.notify('Update Patient Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PatientsActions.deletePatientSuccess),
        tap(() => this.notificationService.notify('Delete Patient Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}