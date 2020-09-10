import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BillingModel } from '../../../models/billingModel';
import { LocalDetailsModel } from '../../../models/localDetailsModel';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { ShippingModel } from '../../../models/shippingModel';
import { UserModel } from '../../../models/userModel';
import { LocalStorageService } from '../../../services/localStorage.service';

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
      lastname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      firstname: new FormControl(),
      email: new FormControl(),
    });
    this.billingAddressForm = new FormGroup({
      company: new FormControl('', [Validators.required, Validators.minLength(4)]),
      country: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      zip: new FormControl(),
      phone: new FormControl(),
    });
    this.shippingAddressForm = new FormGroup({
      shipCompany: new FormControl(),
      shipCountry: new FormControl(),
      shipAddress: new FormControl(),
      shipAddress2: new FormControl(),
      shipCity: new FormControl(),
      shipProvince: new FormControl(),
      shipZip: new FormControl(),
      shipInfo: new FormControl(),
    });
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl(),
      expiresDate: new FormControl(),
      nameOnCard: new FormControl(),
      cvv: new FormControl(),
    })
  }

  details: LocalDetailsModel = new class implements LocalDetailsModel {
    email: string;
    firstname: string;
    lastname: string;
  };
  product: ProductListItemForLocal[];
  allTotal: number = 0;
  isLoggedIn: boolean;
  isFilledAddress: boolean;
  isDifferentAddress: boolean;
  isPayment: boolean;
  personalDetailsForm: FormGroup;
  billingAddressForm: FormGroup;
  shippingAddressForm: FormGroup;
  paymentForm: FormGroup;
  personalDetails: UserModel;
  shippingDetails: ShippingModel;
  billingDetails: BillingModel;
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
        if (par.id === loc.id) {
          par.qty = loc.qty;
          this.allTotal += (par.price * loc.qty);
        }
      }
    }
  }


  continueToAddress() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  saveDetails() {
    if (this.localStorageService.getItemsFromLocalStorage(DETAILS_KEY).length != 0) {
      this.localStorageService.deleteItem(DETAILS_KEY);
      this.savePersonalInfo();
    }
    this.continueToAddress();
    this.details.lastname = this.personalDetailsForm.controls['lastname'].value;
    this.details.firstname = this.personalDetailsForm.controls['firstname'].value;
    this.details.email = this.personalDetailsForm.controls['email'].value;
    this.localStorageService.storeDetailsOnLocalStorage(this.details, DETAILS_KEY);
  }

  setDeliveryAddress() {
    this.isDifferentAddress = true;
  }

  editDeliveryAddress() {
    this.isFilledAddress = !this.isFilledAddress;
    this.isPayment = !this.isPayment;
    this.isDifferentAddress = false;
  }

  continueToPayment() {
    this.isFilledAddress = !this.isFilledAddress;
    this.isPayment = !this.isPayment;
  }

  savePersonalInfo() {
    const personalDetails = {...this.personalDetailsForm.value};
    this.personalDetails = new class implements UserModel {
      email: string = personalDetails.email;
      firstname: string = personalDetails.firstname;
      lastname: string = personalDetails.lastname;
    };
    console.log(this.personalDetails)
  }

  saveBillingInfo() {
    console.log(this.isDifferentAddress)
    const billingInfo = {...this.billingAddressForm.value};
    this.billingDetails = new class implements BillingModel {
      address: string = billingInfo.address;
      address2: string = billingInfo.address2;
      city: string = billingInfo.city;
      company: string = billingInfo.company;
      country: string = billingInfo.country;
      phone: string = billingInfo.phone;
      province: string = billingInfo.province;
      zip: number = billingInfo.zip;
    }
    console.log(this.billingDetails)
    if (this.isDifferentAddress) {

      this.saveShipping()
    } else {
      const shippingInfo = {...this.shippingAddressForm.value};
      this.shippingDetails = new class implements ShippingModel {
        address: string = billingInfo.address;
        address2: string = billingInfo.address2;
        city: string = billingInfo.city;
        company: string = billingInfo.company;
        country: string = billingInfo.country;
        shipInfo: string = shippingInfo.shipInfo;
        province: string = billingInfo.province;
        zip: number = billingInfo.zip;
      };
      console.log(this.shippingDetails)
    }
  }

  saveShipping() {
    const shippingInfo = {...this.shippingAddressForm.value};
    this.shippingDetails = new class implements ShippingModel {
      address: string = shippingInfo.shipAddress;
      address2: string = shippingInfo.shipAddress2;
      city: string = shippingInfo.shipCity;
      company: string = shippingInfo.shipCompany;
      country: string = shippingInfo.shipCountry;
      shipInfo: string = shippingInfo.shipInfo;
      province: string = shippingInfo.shipProvince;
      zip: number = shippingInfo.shipZip;
    };
    console.log(this.shippingDetails)
  }
}
