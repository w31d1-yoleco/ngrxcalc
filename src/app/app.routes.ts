import { Routes } from '@angular/router';
import { CalculatorbodyComponent } from './calculatorbody/calculatorbody.component';
import { CalcinfopageComponent } from './calcinfopage/calcinfopage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tobody', pathMatch: 'full' },
    { path: 'toinfo', component: CalcinfopageComponent },
    { path: 'tobody', component: CalculatorbodyComponent},
];
