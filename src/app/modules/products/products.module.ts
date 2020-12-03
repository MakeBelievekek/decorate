import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ActiveFiltersComponent } from '../../components/products/active-filters/active-filters.component';
import { ProductsFilterComponent } from '../../components/products/products-filter/products-filter.component';
import { ProductsHeaderComponent } from '../../components/products/products-header/products-header.component';
import { ProductListItemComponent } from '../../components/products/products-list/product-list-item/product-list-item.component';
import { ProductsListComponent } from '../../components/products/products-list/products-list.component';
import { ProductsModalComponent } from '../../components/products/products-modal/products-modal.component';
import { ProductsComponent } from '../../components/products/products.component';
import { NameShortenerPipe } from '../../pipes/name-shortener.pipe';
import { FrameModule } from '../frame/frame.module';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
    declarations: [
        ActiveFiltersComponent,
        ProductsFilterComponent,
        ProductsHeaderComponent,
        ProductsListComponent,
        ProductsComponent,
        ProductsModalComponent,
        ProductListItemComponent,
        NameShortenerPipe,
        BreadcrumbComponent,
    ],
    imports: [
        RouterModule,
        FrameModule,
        ProductsRoutingModule,
        MatTooltipModule,
        BreadcrumbModule,
    ],
})
export class ProductsModule {
}
