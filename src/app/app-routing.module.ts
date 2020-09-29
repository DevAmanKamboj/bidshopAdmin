import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './modules/users/users.component';

import { ActiveProductsComponent } from './modules/active-products/active-products.component';

import { ExpiredProductsComponent } from './modules/expired-products/expired-products.component';

import { UpcomingProductsComponent } from './modules/upcoming-products/upcoming-products.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DefaultComponent, children: [{
      path: '', component: DashboardComponent
    }, {
      path: 'users', component: UsersComponent
    }, {
      path: 'activeProducts', component: ActiveProductsComponent
    }, {
      path: 'expiredProducts', component: ExpiredProductsComponent
    }, {
      path: 'upcomingProducts', component: UpcomingProductsComponent
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
