import { Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'blog-items',
    pathMatch: 'full',
  },
  {
    path: 'blog-items',
    component: BlogComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
