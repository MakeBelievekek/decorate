import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { LocalStorageService } from '../../../services/localStorage.service';

const CART_KEY = 'local_cartList';

@Component({
    selector: 'app-basket-content',
    templateUrl: './basket-content.component.html',
    styleUrls: ['./basket-content.component.css'],
})
export class BasketContentComponent implements OnInit {

    allTotal: number = 0;
    @Input() productsFromLocalStorage: ProductListItemForLocal[] = [];

    constructor(private localStorageService: LocalStorageService
                , private toastr: ToastrService) {

   }
    ngOnInit(): void {
        this.startingPrice();
        console.log(this.productsFromLocalStorage);
    }

    getAllTotalPrice(event) {
        if (event.plusOrNot === false) {
            this.allTotal -= event.value;
        } else {
            this.allTotal += event.value;
        }
        console.log(this.allTotal);
    }

    startingPrice() {
        if (this.productsFromLocalStorage != null)
            for (let par of this.productsFromLocalStorage) {
                for (let loc of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                    if (par.id === loc.id)
                        this.allTotal += (par.price * loc.qty);
                }
            }
    }

    showPaymentError() {
        this.toastr.error('Sikertelen fizetés');
    }
}
