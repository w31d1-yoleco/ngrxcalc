import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalcMemory } from '../actions/reducer';
import { reset } from '../actions/mathops';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})

export class DisplayComponent {

  memory$: Observable<CalcMemory> 
  displayValue: Number = 1;

  constructor(private store: Store<{ memory: CalcMemory }>) {
    this.memory$ = store.pipe(select('memory'));
    this.memory$.subscribe(mem => this.displayValue = mem.input)
  }

  onReset() {
    this.store.dispatch(reset())
  }

}
