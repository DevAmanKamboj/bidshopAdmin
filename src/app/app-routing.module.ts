import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DefaultComponent, children: [{
      path: '', component: DashboardComponent
    }, {
      path: 'users', component: UsersComponent
    }
    ]
  },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
