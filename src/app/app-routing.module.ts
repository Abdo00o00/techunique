import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BaseComponent } from './views/layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    
    children: [
      {path:"",redirectTo:"user", pathMatch:"full"},
      {
      path: 'user',
      loadChildren: () => import('./views/pages/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./views/pages/admin/admin.module').then((m) => m.AdminModule),
      },
    ]
  },

  {path:"**", component:NotFoundComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
