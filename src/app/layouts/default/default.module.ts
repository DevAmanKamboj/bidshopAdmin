import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatTableModule } from '@angular/material/table'
import { MatTreeModule } from '@angular/material/tree';

// import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {DemoMaterialModule} from './app/material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActiveProductsComponent } from 'src/app/modules/active-products/active-products.component';
import { MatSortModule } from '@angular/material/sort';
import { UpcomingProductsComponent } from 'src/app/modules/upcoming-products/upcoming-products.component';
import { ExpiredProductsComponent } from 'src/app/modules/expired-products/expired-products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from 'src/app/modules/user-detail/user-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { AddressesTabComponent } from 'src/app/modules/addresses-tab/addresses-tab.component';
import { WinningProductsTabComponent } from 'src/app/modules/winning-products-tab/winning-products-tab.component';
import { UserBidsTabComponent } from 'src/app/modules/user-bids-tab/user-bids-tab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductDetailsComponent } from 'src/app/modules/product-details/product-details.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { ProductBidsTabComponent } from 'src/app/modules/product-bids-tab/product-bids-tab.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatSelectModule } from '@angular/material/select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddProductComponent } from 'src/app/modules/add-product/add-product.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UsersComponent,
    ActiveProductsComponent,
    ExpiredProductsComponent,
    UpcomingProductsComponent,
    UserDetailComponent,
    AddressesTabComponent,
    UserBidsTabComponent,
    WinningProductsTabComponent,
    ProductDetailsComponent,
    ProductBidsTabComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTreeModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    CarouselModule,
    WavesModule,
    FontAwesomeModule,
    MDBBootstrapModule,
    MatSelectModule
    // AngularFontAwesomeModule
  ]
})
export class DefaultModule { }
