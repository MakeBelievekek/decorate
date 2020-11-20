import { Component, HostListener, OnInit } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { ScreenSizeModel } from '../../../models/ScreenSize.model';
import { ScreenService } from '../../../services/screen.service';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
    images: ProductListItemForLocal [] = [];
    responsiveOptions;

    a: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 20000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    b: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 20000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    c: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 20000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    d: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 20000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    e: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 10000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    f: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 10000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    g: ProductListItemForLocal = new class implements ProductListItemForLocal {
        id: number;
        image: string = 'https://i.imgur.com/wjoNXAQ.jpg';
        itemNumber: string;
        name: string = 'Tapéta';
        price: number = 10000;
        productDesc: string;
        qty: number;
        typeOfSize: string;
    };
    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };


    constructor(private screenService: ScreenService) {

        this.responsiveOptions = [
            {
                breakpoint: '1500px',
                numVisible: 5,
                numScroll: 3,
            }, {
                breakpoint: '1250px',
                numVisible: 4,
                numScroll: 3,
            },
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '899px',
                numVisible: 5,
                numScroll: 2,
            },
            {
                breakpoint: '799px',
                numVisible: 4,
                numScroll: 1,
            },
            {
                breakpoint: '699px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '599px',
                numVisible: 3,
                numScroll: 1,
            }
        ];

        this.images = [this.a, this.b, this.c, this.d, this.e, this.f, this.g];
    }


    ngOnInit(): void {

    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }

}
