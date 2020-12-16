import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BarionInformationComponent } from './components/barion-information/barion-information.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)},
    {path: 'basket', loadChildren: () => import('src/app/modules/basket/basket.module').then(m => m.BasketModule)},
    {path: 'kivansaglista', loadChildren: () => import('src/app/modules/wish-list/wish-list.module').then(m => m.WishListModule)},
    {path: 'checkout', loadChildren: () => import('src/app/modules/checkout/checkout.module').then(m => m.CheckoutModule),},
    {path: 'admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)},
    {path: 'termekkategoriak', loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule),},
    {path: 'termekkategoriak/fuggonyok/ifjusagi/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/fuggonyok/blackout/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/fuggonyok/sotetito/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/fuggonyok/fenyatereszto/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/butorszovet/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/parna/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/tapeta/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
    {path: 'termekkategoriak/lakasdekoracio/:id', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule),},
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
