import { Routes } from '@angular/router';
import { Exo1 } from './exercice1/exo1/exo1';
import { Exo2 } from './exercice2/exo2/exo2';
import { Home } from './exercice3/home/home';
import { Detail } from './exercice3/detail/detail';

export const routes: Routes = [
  { path: '', redirectTo: '/exo1', pathMatch: 'full' },
  { path: 'exo1', component: Exo1 },
  { path: 'exo2', component: Exo2 },
  { path: 'exo3', component: Home },
  { path: 'exo3/detail/:id', component: Detail }
];
