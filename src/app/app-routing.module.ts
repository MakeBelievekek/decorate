import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BasketComponent } from './components/basket/basket.component';
import { CheckoutComponent } from './components/basket/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { BasketContentResolver } from './services/basket-content-resolver';
import { HomeResolver } from './services/home-resolver';


const routes: Routes = [
    {
        path: '', component: HomeComponent, resolve: {
            images: HomeResolver,
        },
    },
    {path: 'admin', component: AdminComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product', component: ProductComponent},
    {
        path: 'basket', component: BasketComponent,
        resolve: {
            basketItems: BasketContentResolver,
        },
    },
    {
        path: 'checkout', component: CheckoutComponent,
        resolve: {
            basketItems: BasketContentResolver,
        },
    },
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
