import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)},
    {path: 'basket', loadChildren: () => import('src/app/modules/basket/basket.module').then(m => m.BasketModule)},
    {path: 'checkout', loadChildren: () => import('src/app/modules/checkout/checkout.module').then(m => m.CheckoutModule)},
    {path: 'admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)},
    {path: 'products', component: ProductsComponent},
    {path: 'product', component: ProductComponent},
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
