import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtpListItem } from '../../../models/atpListItem';
import { BillingModel } from '../../../models/billingModel';
import { LocalDetailsModel } from '../../../models/localDetailsModel';
import { LocalProductModel } from '../../../models/localProductModel';
import { OrderModel } from '../../../models/orderModel';
import { PayingOptionEnum } from '../../../models/payingOptionEnum';
import { PaymentOptionDto } from '../../../models/paymentOptionDto';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { ShippingModel } from '../../../models/shippingModel';
import { ShippingOptions } from '../../../models/shippingOptions';
import { UserModel } from '../../../models/userModel';
import { BasketService } from '../../../services/basket.service';
import { CheckoutService } from '../../../services/checkout.service';
import { LocalStorageService } from '../../../services/localStorage.service';
import { PaymentService } from '../../../services/payment.service';
import { ProductService } from '../../../services/product.service';
import { handleValidationErrors } from '../../../validation/validation';

const CART_KEY = 'local_cartList';
const DETAILS_KEY = 'local_detailsList';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

    constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService,
                private productService: ProductService, private basketService: BasketService,
                private paymentService: PaymentService, private router: Router, @Inject(DOCUMENT) private document: Document,
                private checkoutService: CheckoutService) {
        this.personalDetailsForm = new FormGroup({
            lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
            firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
        this.billingAddressForm = new FormGroup({
            company: new FormControl(''),
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
            shipAddress: new FormControl(),
            shipAddress2: new FormControl(),
            shipCity: new FormControl(),
            shipProvince: new FormControl(),
            shipZip: new FormControl(),
            shipInfo: new FormControl(),
            shipMethod: new FormControl(),
            foxpost: new FormControl(),
        });
    }

    details: LocalDetailsModel = new class implements LocalDetailsModel {
        email: string;
        firstName: string;
        lastName: string;
    };
    products: ProductListItemForLocal[];
    allTotal: number = 0;
    isLoggedIn: boolean;
    isFilledAddress: boolean;
    isDifferentAddress: boolean;
    isPayment: boolean;
    personalDetailsForm: FormGroup;
    billingAddressForm: FormGroup;
    shippingAddressForm: FormGroup;
    personalDetails: UserModel;
    shippingDetails: ShippingModel;
    selectedPayingOption: PaymentOptionDto;
    billingDetails: BillingModel;
    provinces: string [] = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád',
        'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
        'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];
    country: string = 'Magyarország';
    currentlyCheckedShippingOption: string;
    currentlyCheckedPayingOption: string;
    shippingOptions: ShippingOptions[] = [];
    actualDeliveryPrice: number = 0;
    atpList: AtpListItem[] = [];
    paymentOptions: PaymentOptionDto[] = [];
    order: OrderModel;

    ngOnInit(): void {
        this.products = this.route.snapshot.data.basketItems;
        this.startingPrice();
        this.productService.getShippingOptions().subscribe((data) => {
            this.shippingOptions = data;
        });
        this.basketService.getAtpList().subscribe((data) => {
                this.atpList = data;
            }, () => {}, () => {this.atpList.sort((a, b) => a.city.localeCompare(b.city));},
        );

    }

    startingPrice() {
        for (let par of this.products) {
            for (let loc of this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
                if (par.id === loc.id) {
                    par.qty = loc.qty;
                    this.allTotal += (par.price * par.qty);
                }
            }
        }
    }


    saveDetails() {
        if (this.localStorageService.getItemsFromLocalStorage(DETAILS_KEY).length != 0) {
            this.localStorageService.deleteItem(DETAILS_KEY);
            this.savePersonalInfo();
        }
        this.continueToAddress();
        this.details.lastName = this.personalDetailsForm.controls['lastname'].value;
        this.details.firstName = this.personalDetailsForm.controls['firstname'].value;
        this.details.email = this.personalDetailsForm.controls['email'].value;
        this.localStorageService.storeDetailsOnLocalStorage(this.details, DETAILS_KEY);
    }

    setDeliveryAddress() {
        this.isDifferentAddress = !this.isDifferentAddress;
    }

    continueToAddress() {
        this.isLoggedIn = !this.isLoggedIn;
    }

    resetAll() {
        this.isLoggedIn = this.isDifferentAddress = this.isPayment = this.isFilledAddress = false;
    }

    editDeliveryAddress() {
        this.isFilledAddress = !this.isFilledAddress;
        this.isPayment = !this.isPayment;
        this.isDifferentAddress = false;
    }

    continueToPayment() {
        this.isFilledAddress = !this.isFilledAddress;
        this.isPayment = !this.isPayment;
        this.currentlyCheckedPayingOption = PayingOptionEnum.BARION_KARTYAS_FIZETES;
        console.log(this.currentlyCheckedPayingOption);
    }

    savePersonalInfo() {
        const personalDetails = {...this.personalDetailsForm.value};
        this.personalDetails = new class implements UserModel {
            email: string = personalDetails.email;
            firstName: string = personalDetails.firstname;
            lastName: string = personalDetails.lastname;
        };
    }

    saveBillingInfo() {
        const billingInfo = {...this.billingAddressForm.value};
        this.billingDetails = new class implements BillingModel {
            address: string = billingInfo.address;
            address2: string = billingInfo.address2;
            city: string = billingInfo.city;
            company: string = billingInfo.company;
            country: string = 'Magyarország';
            phone: string = billingInfo.phone;
            province: string = billingInfo.province;
            zip: number = billingInfo.zip;
        };
        if (this.isDifferentAddress) {
            this.saveShipping();
        } else {
            const shippingInfo = {...this.shippingAddressForm.value};
            this.shippingDetails = new class implements ShippingModel {
                address: string = billingInfo.address;
                address2: string = billingInfo.address2;
                city: string = billingInfo.city;
                company: string = billingInfo.company;
                country: string = 'Magyarország';
                shipInfo: string = shippingInfo.shipInfo;
                shipMethod: string = shippingInfo.shipMethod;
                foxpost: string = shippingInfo.foxpost;
                province: string = billingInfo.province;
                zip: number = billingInfo.zip;
            };
        }
    }

    saveShipping() {
        const shippingInfo = {...this.shippingAddressForm.value};
        this.shippingDetails = new class implements ShippingModel {
            address: string = shippingInfo.shipAddress;
            address2: string = shippingInfo.shipAddress2;
            city: string = shippingInfo.shipCity;
            company: string = shippingInfo.shipCompany;
            country: string = 'Magyarország';
            shipInfo: string = shippingInfo.shipInfo;
            shipMethod: string = shippingInfo.shipMethod;
            foxpost: string = shippingInfo.foxpost;
            province: string = shippingInfo.shipProvince;
            zip: number = shippingInfo.shipZip;
        };
    }

    /* if (this.currentlyCheckedShippingOption === targetType) {
                this.currentlyCheckedShippingOption = 'NONE';
            }*/

    selectShippingOption(targetType: string) {
        this.getShippingPrice(targetType);
        this.currentlyCheckedShippingOption = targetType;
        this.shippingOptions.forEach(opt => {
            if (opt.typeOfDelivery === targetType) {
                this.paymentOptions = opt.paymentOptions;
                this.paymentOptions.sort((a, b) => a.type < b.type ? -1 : 1);
            }
        });
    }

    selectPayingOption(targetType: PaymentOptionDto) {
        this.selectedPayingOption = targetType;
        this.currentlyCheckedPayingOption = targetType.type;
    }

    getShippingPrice(option: string) {
        this.shippingOptions.forEach(opt => {
            if (option === opt.typeOfDelivery)
                this.actualDeliveryPrice = opt.price;
        });
    }

    createOrderRequest() {
        this.order = new class implements OrderModel {
            billing: BillingModel;
            itemId: LocalProductModel[];
            paymentOption: string;
            shipping: ShippingModel;
            user: UserModel;
        };
        this.order.user = this.personalDetails;
        this.order.itemId = this.localStorageService.getItemsFromLocalStorage(CART_KEY);
        this.order.billing = this.billingDetails;
        this.order.shipping = this.shippingDetails;
        this.order.paymentOption = this.currentlyCheckedPayingOption;
        console.log(this.order);
        this.sendingRequest(this.order);
    }

    sendingRequest(order: OrderModel) {
        if (order.paymentOption === PayingOptionEnum.BARION_KARTYAS_FIZETES) {
            this.paymentService.sendingBarionOrder(order).subscribe((data) => {
                let response = data;
                response = JSON.parse(response.body);
                this.goToUrl(response.GatewayUrl);
            });
        } else {
            this.paymentService.sendingOrder(order).subscribe(() => {
                setInterval(() => {
                    this.checkoutService.sendData(this.products);
                  //  this.router.navigate(['/']);
                }, 1000);
            }, error => handleValidationErrors(error, this.personalDetailsForm));
        }
    }

    goToUrl(url: string): void {
        this.document.location.href = url;
    }
}
