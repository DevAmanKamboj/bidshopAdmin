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

const routes: Routes = [
  {
    path: 'dashboard', component: DefaultComponent, children: [{
      path: '', component: DashboardComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'users', component: UsersComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'activeProducts', component: ActiveProductsComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'expiredProducts', component: ExpiredProductsComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'upcomingProducts', component: UpcomingProductsComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'userDetail', component: UserDetailComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'productDetails/:id', component: ProductDetailsComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'addProduct/:id', component: AddProductComponent, canActivate: [LoginGuardGuard]
    }, {
      path: 'allProducts', component: AllProductsComponent, canActivate: [LoginGuardGuard]
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
