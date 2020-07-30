import { Component, OnInit } from '@angular/core';
import { BasketProdModel } from '../../../models/basket-prod-model';

@Component({
    selector: 'app-basket-content',
    templateUrl: './basket-content.component.html',
    styleUrls: ['./basket-content.component.css'],
})
export class BasketContentComponent implements OnInit {

    parentProd: BasketProdModel[];


    constructor() {
        this.parentProd = [
            {
                img: 'https://i.pinimg.com/originals/84/6d/be/846dbe31557588b055853eb45590248f.jpg',
                qty: 1,
                price: 200,
                totalPrice: 200,
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-03.jpg',
                qty: 2,
                price: 300,
                totalPrice: 600,
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-05.jpg',
                qty: 1,
                price: 100,
                totalPrice: 100,
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-04.jpg',
                qty: 3,
                price: 350,
                totalPrice: 1050,
            },
        ];
    }

    ngOnInit(): void {
    }

    addPlus() {

    }
}
