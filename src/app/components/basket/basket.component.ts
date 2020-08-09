import {Component, OnInit} from '@angular/core';
import {PaymentResponseModel} from '../../models/paymentResponseModel';
import {PaymentService} from '../../services/payment.service';
import {LocalStorageService} from "../../services/localStorage.service";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  totalArray: number[] = [];
  total: number = 0;

  constructor(private paymentService: PaymentService, private basketService: BasketService) {
  }

  response: PaymentResponseModel;


  ngOnInit(): void {
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
