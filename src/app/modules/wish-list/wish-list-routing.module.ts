import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListComponent } from '../../components/wish-list/wish-list.component';
import { BasketContentResolver } from '../../services/basket-content-resolver';
import { WishListResolver } from '../../services/wish-list-resolver';


const routes: Routes = [
    {
        path: '', component: WishListComponent,
        resolve: {
            wishListItems: WishListResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WishListRoutingModule {
}
