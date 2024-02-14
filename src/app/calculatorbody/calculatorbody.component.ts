import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { CalctableComponent } from '../calctable/calctable.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import { CalcalertComponent } from '../calcalert/calcalert.component';
import { Alert, AlertType } from '../actions/alerting';
import { Store } from '@ngrx/store';
import { alert } from '../actions/mathops';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calculatorbody',
  standalone: true,
  imports: [DisplayComponent, KeyboardComponent, CalctableComponent, CalcalertComponent],
  templateUrl: './calculatorbody.component.html',
  styleUrl: './calculatorbody.component.css'
})
export class CalculatorbodyComponent {

  constructor(private store: Store<{ memory: Alert }>) {
    this.store.dispatch(alert({t: AlertType.INFO,  m: "Application started 🛹"}))
  }

}
