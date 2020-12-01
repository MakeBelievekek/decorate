import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from '../../components/basket/basket.component';
import { BasketContentResolver } from '../../services/basket-content-resolver';


const routes: Routes = [
    {
        path: '', component: BasketComponent,
        resolve: {
            basketItems: BasketContentResolver,
        },
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BasketRoutingModule {
}
