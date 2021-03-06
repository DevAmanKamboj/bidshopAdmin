import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './modules/users/users.component';

import { ActiveProductsComponent } from './modules/active-products/active-products.component';

import { ExpiredProductsComponent } from './modules/expired-products/expired-products.component';

import { UpcomingProductsComponent } from './modules/upcoming-products/upcoming-products.component';

import { UserDetailComponent } from 'src/app/modules/user-detail/user-detail.component';

import { ProductDetailsComponent } from 'src/app/modules/product-details/product-details.component';

import { AddProductComponent } from 'src/app/modules/add-product/add-product.component';

import { AllProductsComponent } from 'src/app/modules/all-products/all-products.component';
import { LoginGuardGuard } from './login-guard.guard';
import { DashboardMenuGuard } from './dashboard-menu.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: DefaultComponent, canActivateChild: [DashboardMenuGuard], children: [{
      path: '', component: DashboardComponent
    }, {
      path: 'users', component: UsersComponent
    }, {
      path: 'activeProducts', component: ActiveProductsComponent
    }, {
      path: 'expiredProducts', component: ExpiredProductsComponent
    }, {
      path: 'upcomingProducts', component: UpcomingProductsComponent
    }, {
      path: 'userDetail', component: UserDetailComponent
    }, {
      path: 'productDetails/:id', component: ProductDetailsComponent
    }, {
      path: 'addProduct/:id', component: AddProductComponent
    }, {
      path: 'allProducts', component: AllProductsComponent
    }
    ]
  },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
