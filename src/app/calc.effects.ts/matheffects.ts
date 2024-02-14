import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { EMPTY, Observable, catchError, exhaustMap, map, tap } from 'rxjs';
import { CalcserviceconnectService } from '../calcserviceconnect.service';
import { Store, select } from '@ngrx/store';
import { CalcMemory } from '../actions/reducer';
import { sqrt } from '../actions/mathops';


@Injectable()
export class MathEffects {

  memory$: Observable<CalcMemory> 
  parameter: number = 1;

  constructor(
    private actions$: Actions,
    private service: CalcserviceconnectService,
    private store: Store<{ memory: CalcMemory }>
  ) {
        this.memory$ = store.pipe(select('memory'));
        this.memory$.subscribe(mem => this.parameter = mem.input)
    }

  squareRoot$ = createEffect(() => this.actions$.pipe(
    ofType(sqrt),
    exhaustMap(() => this.service.getSquareRootFromServiceWithParameter(this.parameter)
      .pipe(
        map(result => ({ type: '[[Op] SquareRoot Success', result: result })),
        catchError(() => EMPTY)
      ))
    )
  );
}