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



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UsersComponent,
    ActiveProductsComponent,
    ExpiredProductsComponent,
    UpcomingProductsComponent
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
    MatSortModule
  ]
})
export class DefaultModule { }
