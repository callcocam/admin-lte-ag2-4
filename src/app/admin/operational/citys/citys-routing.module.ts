import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CitysComponent } from './citys.component';
import { AuthGuardRouterService } from '../../../auth/sercices/auth-guard-router.service';
import { EditComponent } from './city/edit/edit.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: 'admin/operacional',
          component: CitysComponent,
          children: [
            {
              path: '',
              redirectTo: 'admin/operacional/cidades',
              pathMatch: 'full',
              canActivate: [AuthGuardRouterService]
            },
            {
              path: 'admin/operacional/cidades/create',
              component: CitysComponent,
              canActivate: [AuthGuardRouterService]
            },
            {
              path: 'admin/operacional/cidades/:id/edit',
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
  export class CitysRoutingModule { }
  