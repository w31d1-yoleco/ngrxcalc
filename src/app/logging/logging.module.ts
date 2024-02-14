import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { CalcMemory } from '../actions/reducer';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoggingModule {
  
  memory$: Observable<CalcMemory>

  constructor(private store: Store<{ memory: CalcMemory }>) {
    this.memory$ = store.pipe(select('memory'));
    this.memory$.subscribe(mem => console.log('This is the state: ' + JSON.stringify(mem)))
  }

}
