import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CardsNarutoComponent } from './features/cards-naruto/cards-naruto.component';
import { CalculadoraComponent } from './features/calculadora/calculadora.component';
import { DinorunComponent } from './features/dinorun/dinorun.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cards-naruto',
    component: CardsNarutoComponent,
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
  },
  {
    path: 'dinoran',
    component: DinorunComponent,
  },
];
