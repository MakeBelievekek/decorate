import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminContentComponent } from '../../components/admin/admin-content/admin-content.component';
import { AdminMainComponent } from '../../components/admin/admin-main/admin-main.component';
import { AdminProductFormComponent } from '../../components/admin/admin-product-form/admin-product-form.component';
import { AdminSidebarComponent } from '../../components/admin/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from '../../components/admin/admin.component';
import { CategoryFormComponent } from '../../components/admin/category-form/category-form.component';
import { PaymentHistoryComponent } from '../../components/admin/payment-history/payment-history.component';
import { FrameModule } from '../frame/frame.module';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    declarations: [
        AdminComponent,
        CategoryFormComponent,
        PaymentHistoryComponent,
        AdminContentComponent,
        AdminMainComponent,
        AdminSidebarComponent,
        AdminProductFormComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        FrameModule
    ],

})
export class AdminModule {
}
