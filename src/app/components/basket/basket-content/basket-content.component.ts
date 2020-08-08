import { Component, OnInit } from '@angular/core';
import { BasketProdModel } from '../../../models/basket-prod-model';

@Component({
    selector: 'app-basket-content',
    templateUrl: './basket-content.component.html',
    styleUrls: ['./basket-content.component.css'],
})
export class BasketContentComponent implements OnInit {

    parentProd: BasketProdModel[];
    allTotal: number = 0;

    constructor() {
        this.parentProd = [
            {
                img: 'https://i.pinimg.com/originals/84/6d/be/846dbe31557588b055853eb45590248f.jpg',
                qty: 1,
                price: 200,
                description: 'valami',
                itemNo: 11223,
                size: 'roll',
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-03.jpg',
                qty: 2,
                price: 300,
                description: 'valami',
                itemNo: 33332,
                size: 'roll',
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-05.jpg',
                qty: 1,
                price: 100,
                description: 'valami',
                itemNo: 22313,
                size: 'roll',
            },
            {
                img: 'https://retaildesignblog.net/wp-content/uploads/2011/05/Pine-Art-Furnitures-04.jpg',
                qty: 3,
                price: 350,
                description: 'valami',
                itemNo: 56784,
                size: 'roll',
            },
        ];
    }

    ngOnInit(): void {
        this.startingTotal();
    }

    getAllTotalPrice(event) {
        if (event.plusOrNot === false) {
            this.allTotal -= event.value;
        } else {
            this.allTotal += event.value;
        }
    }

    startingTotal() {
        for (let prod of this.parentProd) {
            this.allTotal += prod.price;
        }
    }
}
