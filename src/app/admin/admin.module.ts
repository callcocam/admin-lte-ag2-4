// RECOMMENDED (doesn't work with system.js)
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {DataTableModule} from 'primeng/datatable';
import {DataListModule} from 'primeng/datalist';
import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './controle-de-etoque/categories/categories.component';
import { BrandsComponent } from './controle-de-etoque/brands/brands.component';
import { ProductsComponent } from './controle-de-etoque/products/products.component';
import { ControleDeEstoqueService } from './controle-de-etoque/controle-de-estoque.service';
import { CitysComponent } from './operational/citys/citys.component';
import { OperationalService } from './operational/operational.service';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { EditComponent } from './operational/citys/city/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    BsDatepickerModule,
    DataTableModule,
    DataListModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    CategoriesComponent,
    BrandsComponent,
    ProductsComponent,
    CitysComponent,
    EditComponent
  ],
  exports: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component
  ],
  providers:[ControleDeEstoqueService,OperationalService]
})
export class AdminModule { }
