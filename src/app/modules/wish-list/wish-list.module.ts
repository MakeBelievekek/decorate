import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyWishComponent } from '../../components/wish-list/empty-wish/empty-wish.component';
import { WishContentComponent } from '../../components/wish-list/wish-content/wish-content.component';
import { WishHeaderComponent } from '../../components/wish-list/wish-header/wish-header.component';
import { WishItemComponent } from '../../components/wish-list/wish-item/wish-item.component';
import { WishListComponent } from '../../components/wish-list/wish-list.component';
import { FrameModule } from '../frame/frame.module';

import { WishListRoutingModule } from './wish-list-routing.module';


@NgModule({
    declarations: [
        WishListComponent,
        WishHeaderComponent,
        WishContentComponent,
        EmptyWishComponent,
        WishItemComponent,
    ],
    imports: [
        FrameModule,
        RouterModule,
        WishListRoutingModule,
    ],
})
export class WishListModule {
}
