import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LocalDetailsModel} from '../../../models/localDetailsModel';
import {ProductListItemForLocal} from '../../../models/productListItemForLocal';
import {LocalStorageService} from '../../../services/localStorage.service';

const CART_KEY = 'local_cartList';
const DETAILS_KEY = 'local_detailsList';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {
    this.personalDetailsForm = new FormGroup({
      lastname: new FormControl(),
      firstname: new FormControl(),
      email: new FormControl(),
    });
    this.billingAddressForm = new FormGroup({
      company: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      zip: new FormControl(),
      phone: new FormControl(),
    });
    this.shippingAddressForm = new FormGroup({})
  }

  details: LocalDetailsModel = new class implements LocalDetailsModel {
    email: string;
    firstname: string;
    lastname: string;
  };
  @Input() product: ProductListItemForLocal[];
  allTotal: number = 0;
  isLoggedIn: boolean;
  isFilledAddress: boolean;
  isDifferentAddress: boolean;
  personalDetailsForm: FormGroup;
  billingAddressForm: FormGroup;
  shippingAddressForm: FormGroup;
  provinces: string [] = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád',
    'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
    'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];

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

  continueToAddress() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  saveDetails() {
    if (this.localStorageService.getItemsFromLocalStorage(DETAILS_KEY).length != 0) {
      this.localStorageService.deleteItem(DETAILS_KEY);
    }
    this.continueToAddress();
    this.details.lastname = this.personalDetailsForm.controls['lastname'].value;
    this.details.firstname = this.personalDetailsForm.controls['firstname'].value;
    this.details.email = this.personalDetailsForm.controls['email'].value;
    this.localStorageService.storeDetailsOnLocalStorage(this.details, DETAILS_KEY);
  }

  setDeliveryAddress() {
    this.isDifferentAddress = !this.isDifferentAddress;
  }
}
