import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BarionInformationComponent } from './components/barion-information/barion-information.component';


const routes: Routes = [
    {path: '', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)},
    {path: 'basket', loadChildren: () => import('src/app/modules/basket/basket.module').then(m => m.BasketModule)},
    {
        path: 'kivansaglista',
        loadChildren: () => import('src/app/modules/wish-list/wish-list.module').then(m => m.WishListModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import('src/app/modules/checkout/checkout.module').then(m => m.CheckoutModule),
    },
    {path: 'admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)},
    {
        path: 'fuggony',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/dekorfuggony',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/blackout',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/gyerekfuggony',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/fenyateresztofuggony',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/sotetitofuggony',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'tapeta',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'parna',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'lakasdekoracio',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'butorszovet',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'fuggony/dekorfuggony/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'fuggony/blackout/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'fuggony/gyerekfuggony/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'fuggony/fenyateresztofuggony/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'fuggony/sotetitofuggony/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'tapeta/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'parna/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'lakasdekoracio/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {
        path: 'butorszovet/:id',
        loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),
    },
    {path: 'barion-fizetesi-tajekoztato', component: BarionInformationComponent},
];
const extraOptions: ExtraOptions = {
    'enableTracing': true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
