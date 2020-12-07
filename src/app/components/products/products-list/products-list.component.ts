import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DummyProductModel } from '../../../models/dummyProductModel';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

    constructor(private route:Router) {
        this.dumy1.imageList[0].imgUrl = 'https://i.imgur.com/Vcfn5DW.jpg';
        this.dumy1.imageList[1].imgUrl = 'https://i.imgur.com/CjhCxAf.jpg';
        this.dumy1.price = 11700;
        this.dumy1.name = 'Japan Gray';
        this.dumy2.imageList[0].imgUrl = 'https://i.imgur.com/IaxFDJq.jpg';
        this.dumy2.imageList[1].imgUrl = 'https://i.imgur.com/xooztSN.jpg';
        this.dumy2.price = 11700;
        this.dumy2.name = 'Japan Black';
        this.dumy3.imageList[0].imgUrl = 'https://i.imgur.com/nDjWFAX.jpg';
        this.dumy3.imageList[1].imgUrl = 'https://i.imgur.com/AiD4NyC.jpg';
        this.dumy3.price = 22300;
        this.dumy3.name = 'Szép Függöny';
        this.dumy4.imageList[0].imgUrl = 'https://i.imgur.com/rnrlSK7.jpg';
        this.dumy4.imageList[1].imgUrl = 'https://i.imgur.com/UEHJy7W.jpg';
        this.dumy4.price = 16500;
        this.dumy4.name = 'On the road Tramac ';
    }

    dumys: DummyProductModel[] = [];
    dumy1: DummyProductModel = new DummyProductModel();
    dumy2: DummyProductModel = new DummyProductModel();
    dumy3: DummyProductModel = new DummyProductModel();
    dumy4: DummyProductModel = new DummyProductModel();


    ngOnInit(): void {
        this.dumys.push(this.dumy1);
        this.dumys.push(this.dumy2);
        this.dumys.push(this.dumy3);
        this.dumys.push(this.dumy4);
    }

  route1() {
    this.route.navigateByUrl('termekkategoriak/tapeta/1')
  }
}
