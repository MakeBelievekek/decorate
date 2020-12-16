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
                data: {
                    breadcrumb: 'Függönyök',
                }, children: [{
                    path: 'sotetito',
                    data: {
                        breadcrumb: 'Sötétítő',
                    },
                },
                    {
                        path: 'fenyatereszto',
                        data: {
                            breadcrumb: 'Fényáteresztő',
                        },
                    },
                    {
                        path: 'blackout',
                        data: {
                            breadcrumb: 'Blackout',
                        },

                    },
                    {
                        path: 'ifjusagi',
                        data: {
                            breadcrumb: 'Ifjúsági',
                        },
                    }],
            },
            {
                path: 'butorszovet',
                data: {
                    breadcrumb: 'Bútorszövet',
                },
            },
            {
                path: 'tapeta',
                data: {
                    breadcrumb: 'Tapéta',
                },
            },
            {
                path: 'lakasdekoracio',
                data: {
                    breadcrumb: 'Lakásdekoráció',
                },
            },
            {
                path: 'parna',
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
