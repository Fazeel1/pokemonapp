import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // Ensure it's imported correctly

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/pokemon-list/pokemon-list.component').then(
            (m) => m.PokemonListComponent
          ),
      },
      {
        path: 'details/:name',
        loadComponent: () =>
          import('./features/pokemon-detail/pokemon-detail.component').then(
            (m) => m.PokemonDetailComponent
          ),
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

