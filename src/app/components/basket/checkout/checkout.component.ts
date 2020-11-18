import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtpListItem } from '../../../models/atpListItem';
import { BillingModel } from '../../../models/billingModel';
import { LocalDetailsModel } from '../../../models/localDetailsModel';
import { LocalProductModel } from '../../../models/localProductModel';
import { OrderModel } from '../../../models/orderModel';
import { PaymentOptionDto } from '../../../models/paymentOptionDto';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';
import { ResponseTransaction } from '../../../models/responseTransaction';
import { ShippingModel } from '../../../models/shippingModel';
import { ShippingOptions } from '../../../models/shippingOptions';
import { TransactionsModel } from '../../../models/transactionsModel';
import { UserModel } from '../../../models/userModel';
import { BasketService } from '../../../services/basket.service';
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
                private paymentService: PaymentService, private router: Router, @Inject(DOCUMENT) private document: Document) {
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
    response: ResponseTransaction = new class implements ResponseTransaction {
        CallbackUrl: string;
        Errors: string[];
        GatewayUrl: string;
        PaymentId: string;
        PaymentRequestId: string;
        QRUrl: string;
        RecurrenceResult: string;
        RedirectUrl: string;
        Status: string;
        Transactions: TransactionsModel[];
    };

    ngOnInit(): void {
        this.product = this.route.snapshot.data.basketItems;
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
        for (let par of this.product) {
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
        this.details.lastname = this.personalDetailsForm.controls['lastname'].value;
        this.details.firstname = this.personalDetailsForm.controls['firstname'].value;
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
        this.isLoggedIn = false;
        this.isDifferentAddress = false;
        this.isPayment = false;
        this.isFilledAddress = false;
    }

    editDeliveryAddress() {
        this.isFilledAddress = !this.isFilledAddress;
        this.isPayment = !this.isPayment;
        this.isDifferentAddress = false;
    }

    continueToPayment() {
        this.isFilledAddress = !this.isFilledAddress;
        this.isPayment = !this.isPayment;
        this.currentlyCheckedPayingOption = 'Barion bankkártyás fizetés';
    }

    savePersonalInfo() {
        const personalDetails = {...this.personalDetailsForm.value};
        this.personalDetails = new class implements UserModel {
            email: string = personalDetails.email;
            firstname: string = personalDetails.firstname;
            lastname: string = personalDetails.lastname;
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

    selectShippingOption(targetType: string) {
        if (this.currentlyCheckedShippingOption === targetType) {
            this.currentlyCheckedShippingOption = 'NONE';
        }
        this.getShippingPrice(targetType);
        this.currentlyCheckedShippingOption = targetType;
        for (let pay of this.shippingOptions) {
            if (pay.typeOfDelivery === targetType) {
                this.paymentOptions = pay.paymentOptions;
                this.paymentOptions.sort((a, b) => a.type < b.type ? -1 : 1);
            }
        }
    }

    selectPayingOption(targetType: PaymentOptionDto) {
        if (this.currentlyCheckedPayingOption === targetType.type) {
            this.currentlyCheckedPayingOption = 'NONE';
            return;
        }
        this.selectedPayingOption = targetType;
        this.currentlyCheckedPayingOption = targetType.type;
    }

    getShippingPrice(option: string) {
        for (let opt of this.shippingOptions) {
            if (option === opt.typeOfDelivery) {
                this.actualDeliveryPrice = opt.price;
            }
        }
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
        if (order.paymentOption === 'Barion bankkártyás fizetés') {
            this.paymentService.sendingBarionOrder(order).subscribe((data) => {
                let response = data;
                response = JSON.parse(response.body);
                this.goToUrl(response.GatewayUrl);
            });
        } else {
            this.paymentService.sendingOrder(order).subscribe(() => {}, error => handleValidationErrors(error, this.personalDetailsForm));
        }
    }

    goToUrl(url: string): void {
        this.document.location.href = url;
    }
}
