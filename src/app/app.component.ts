import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DisplayComponent } from './display/display.component';
import { CalculatorbodyComponent } from './calculatorbody/calculatorbody.component';
import { LoggingModule } from './logging/logging.module';
import { CalctableComponent } from './calctable/calctable.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CalcalertComponent } from './calcalert/calcalert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KeyboardComponent, DisplayComponent, CalculatorbodyComponent, CalcalertComponent,
    LoggingModule, CalctableComponent, RouterLink, RouterLinkActive, MatCardModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrxcalc';
}

