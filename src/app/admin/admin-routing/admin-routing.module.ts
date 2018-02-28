import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuardRouterService } from '../../auth/sercices/auth-guard-router.service';
import { AuthLogoutComponent } from '../../auth/auth-logout/auth-logout.component';
import { ProductsComponent } from '../controle-de-etoque/products/products.component';
import { CategoriesComponent } from '../controle-de-etoque/categories/categories.component';
import { BrandsComponent } from '../controle-de-etoque/brands/brands.component';
import { CitysComponent } from '../operational/citys/citys.component';
import { EditComponent } from '../operational/citys/city/edit/edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full',
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'logout',
            component: AuthLogoutComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'controle-de-estoque/categories',
            component: CategoriesComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'controle-de-estoque/brands',
            component: BrandsComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'controle-de-estoque/products',
            component: ProductsComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'operacional/cidades',
            component: CitysComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'operacional/cidades/create',
            component: CitysComponent,
            canActivate: [AuthGuardRouterService]
          },
          {
            path: 'operacional/cidades/:id/edit',
            component: EditComponent,
            canActivate: [AuthGuardRouterService]
          }           
        ],
        canActivate: [AuthGuardRouterService]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
