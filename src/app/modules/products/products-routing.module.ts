import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../components/products/products.component';


const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        data: {
            breadcrumb: 'Termékkategoriák',
        },
        children: [
            {
                path: 'fuggonyok',
                component: ProductsComponent,
                data: {
                    breadcrumb: 'Függönyök',
                }, children: [{
                    path: 'sotetito',
                    component: ProductsComponent,
                    data: {
                        breadcrumb: 'Sötétítő',
                    },
                },
                    {
                        path: 'fenyatereszto',
                        component: ProductsComponent,
                        data: {
                            breadcrumb: 'Fényáteresztő',
                        },
                    },
                    {
                        path: 'blackout',
                        component: ProductsComponent,
                        data: {
                            breadcrumb: 'Blackout',
                        },
                    }, {
                        path: 'ifjusagi',
                        component: ProductsComponent,
                        data: {
                            breadcrumb: 'Ifjúsági',
                        },
                    }],
            },
            {
                path: 'textilkiegeszito',
                component: ProductsComponent,
                data: {
                    breadcrumb: 'Textilkiegészítő',
                },
            },
            {
                path: 'tapeta',
                component: ProductsComponent,
                data: {
                    breadcrumb: 'Tapéta',
                },
            },
            {
                path: 'lakasdekoracio',
                component: ProductsComponent,
                data: {
                    breadcrumb: 'Lakásdekoráció',
                },
            },
            {
                path: 'parna',
                component: ProductsComponent,
                data: {
                    breadcrumb: 'Párnák',
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {
}
