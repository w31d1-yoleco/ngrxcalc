import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Alert } from '../actions/alerting';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-calcalert',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './calcalert.component.html',
  styleUrl: './calcalert.component.css'
})
export class CalcalertComponent {

  constructor(private store: Store<{ alerting: Alert }>) {
    store.select('alerting').subscribe(a => console.log(a.message))
  }

}
