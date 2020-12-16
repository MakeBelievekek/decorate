import { Component, Input, OnInit } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { LocalStorageService } from '../../../services/localStorage.service';

const WISH_LIST = 'local_wishList';

@Component({
    selector: 'app-wish-item',
    templateUrl: './wish-item.component.html',
    styleUrls: ['./wish-item.component.css'],
})
export class WishItemComponent implements OnInit {
    @Input() product: ProductListItemForLocal;

    constructor(private localStorageService: LocalStorageService) { }

    ngOnInit(): void {
    }

    removeFromWish() {
        this.localStorageService.removeFromLocal(this.product.id, WISH_LIST);
        this.localStorageService.remove.next(this.product.id);
    }
}
