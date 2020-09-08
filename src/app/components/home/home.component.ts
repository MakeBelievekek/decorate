import { Component, OnInit } from '@angular/core';
import { HomeModel } from '../../models/homeModel';
import { HomeService } from '../../services/home.service';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    constructor(private productService: ProductService, private home: HomeService) { }

    images: HomeModel[] = [];
    darkImg: string;

    ngOnInit(): void {
        this.home.getHomeImages().subscribe((data) => {
            this.images = data;
        }, () => {}, () => {
            for (let im of this.images) {
                if (im.type === 'Darkener') {
                    console.log('itt vagyok');
                    this.darkImg = im.imgUrl;
                    console.log(this.darkImg);
                }
            }
        });

    }

}
