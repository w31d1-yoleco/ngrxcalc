import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CalcMemory } from '../actions/reducer';
import { Observable } from 'rxjs';
import { keys } from '../model/model';
import { add, dis, divi, handleinput, multi, sqrt, sub, toggleIntegerMode } from '../actions/mathops';
import { CalcserviceconnectService } from '../calcserviceconnect.service';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})

export class KeyboardComponent {
  
  keys= keys;
  memory$: Observable<CalcMemory>

  onButtonInput() {
    throw new Error('Method not implemented.');
  }

  constructor(private store: Store<{ memory: CalcMemory }>, private jsonService: CalcserviceconnectService) {
    this.memory$ = store.pipe(select('memory'));
  }

  userInput(input:string) {
    if(input === '.'){
      this.store.dispatch(toggleIntegerMode())
    }
    if(input === '+'){
      this.store.dispatch(add())
    }
    if(input === '-'){
      this.store.dispatch(sub())
    }
    if(input === '*'){
      this.store.dispatch(multi())
    }
    if(input === '/'){
      this.store.dispatch(divi())
    }
    if(input === '='){
      this.store.dispatch(dis())
    }
    if(input === '√'){
      this.store.dispatch(sqrt())
    }
    let matchKey = keys.filter(key => key.value != null).filter(fkey => fkey.text === input);
    if(matchKey.length == 1){
      this.store.dispatch(handleinput({uinput:input}))
    }
  }
  
}
