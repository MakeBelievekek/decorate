import {Component, Input, OnInit} from '@angular/core';
import {ProductListItemForLocal} from "../../../models/productListItemForLocal";
import {PaymentService} from "../../../services/payment.service";
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../../../services/localStorage.service";
import {FormControl, FormGroup} from "@angular/forms";

const CART_KEY = 'local_cartList';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {
    this.shippingForm = new FormGroup({
      firstName: new FormControl()
    });
  }

  @Input() product: ProductListItemForLocal[];
  allTotal: number = 0;
  isLoggedIn: boolean;
  shippingForm: FormGroup;

  ngOnInit(): void {
    this.product = this.route.snapshot.data.basketItems;
    this.startingPrice();
  }

  startingPrice() {
    for (let par of this.product) {
      for (let loc of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
        if (par.id === loc.id)
          this.allTotal += (par.price * loc.qty);
      }
    }
  }

}
