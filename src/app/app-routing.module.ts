import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"user", pathMatch:"full"},
  {
  path: 'user',
  loadChildren: () => import('./views/pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {path:"**", component:NotFoundComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
