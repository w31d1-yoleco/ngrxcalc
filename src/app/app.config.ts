import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { calcMemoryReducer } from './actions/reducer';
import { alertingReducer } from './actions/alerting';
import { MathEffects } from './calc.effects.ts/matheffects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), provideAnimations(), provideHttpClient(),
    provideStore({ memory: calcMemoryReducer, alerting: alertingReducer }), provideEffects(MathEffects)
  ]
};
