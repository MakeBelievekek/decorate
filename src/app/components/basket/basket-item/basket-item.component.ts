import { Component, Input, OnInit } from '@angular/core';
import { BasketProdModel } from '../../../models/basket-prod-model';

@Component({
    selector: 'app-basket-item',
    templateUrl: './basket-item.component.html',
    styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {

    constructor() { }

    @Input() product: BasketProdModel;

    ngOnInit(): void {
    }

}
