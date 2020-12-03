import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BarionInformationComponent } from './components/barion-information/barion-information.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)},
    {path: 'basket', loadChildren: () => import('src/app/modules/basket/basket.module').then(m => m.BasketModule)},
    {
        path: 'checkout',
        loadChildren: () => import('src/app/modules/checkout/checkout.module').then(m => m.CheckoutModule),
    },
    {path: 'admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)},
    {
        path: 'termekkategoriak',
        loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),
    },
    {path: 'product', component: ProductComponent},
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
