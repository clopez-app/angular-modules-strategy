import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { CustomPreloader } from './modules/core/utils/custom-preloader';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        data: {
          preload: true,
        },
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./modules/details/details.module').then(
            (m) => m.DetailsModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloader,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
