import {Component, OnInit} from '@angular/core';
import {PaymentResponseModel} from '../../models/paymentResponseModel';
import {PaymentService} from '../../services/payment.service';
import {LocalStorageService} from "../../services/localStorage.service";
import {BasketService} from "../../services/basket.service";
import {ActivatedRoute} from "@angular/router";
import {ProductListItemForLocal} from "../../models/productListItemForLocal";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  total: number = 0;
  productsFromLocalStorage: ProductListItemForLocal[];
  response: PaymentResponseModel;

  constructor(private paymentService: PaymentService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productsFromLocalStorage = this.route.snapshot.data.basketItems;
  }

  payment() {
    this.paymentService.transaction().subscribe((data) => {
      this.response = data;
    }, () => {
    }, () => {
      console.log(this.response);
    });
  }


}
