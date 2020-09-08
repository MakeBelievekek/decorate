import {Component, OnInit} from '@angular/core';
import {HomeModel} from '../../models/homeModel';
import {HomeService} from '../../services/home.service';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private home: HomeService, private route: ActivatedRoute) {
  }

  images: HomeModel[] = [];
  darkImg: string;

  ngOnInit(): void {
    this.images = this.route.snapshot.data.images;
    console.log(this.images)
    for (let im of this.images) {
      if (im.type == 'Darkener') {
        this.darkImg = im.imgUrl
      }
    }
  }

}
