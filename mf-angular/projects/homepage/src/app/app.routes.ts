import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () =>
      loadRemoteModule('blog', './routes').then((m) => m.APP_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
