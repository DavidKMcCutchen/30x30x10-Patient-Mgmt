import { Component } from '@angular/core';


@Component({
  selector: 'patient-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Patients';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'patients', icon: 'view_list', title: 'Patients'}
  ]
}
