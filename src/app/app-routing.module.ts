import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomeComponent } from './components/home/home.component';
import {ProductsComponent} from "./components/products/products.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'basket', component: BasketComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
