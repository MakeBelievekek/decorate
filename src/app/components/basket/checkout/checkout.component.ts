import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtpListItem } from '../../../models/atpListItem';
import { BillingModel } from '../../../models/billingModel';
import { LocalProductModel } from '../../../models/localProductModel';
import { OrderModel } from '../../../models/orderModel';
import { OrderSubjectDto } from '../../../models/orderSubjectDto';
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
            address: new FormControl(),
            address2: new FormControl(),
            city: new FormControl(),
            province: new FormControl(),
            zip: new FormControl(),
            phone: new FormControl(),
        });
        this.shippingAddressForm = new FormGroup({
            company: new FormControl(),
            address: new FormControl(),
            address2: new FormControl(),
            city: new FormControl(),
            province: new FormControl(),
            zip: new FormControl(),
            shipInfo: new FormControl(),
            shipMethod: new FormControl(),
            foxpost: new FormControl(),
        });
        this.provinces = this.checkoutService.provinces;
        this.localProducts = this.localStorageService.getItemsFromLocalStorage(CART_KEY);
    }

    personalDetailsForm: FormGroup;
    billingAddressForm: FormGroup;
    shippingAddressForm: FormGroup;
    personalDetails: UserModel = new UserModel();
    orderSubjectDto: OrderSubjectDto = new OrderSubjectDto();
    order: OrderModel = new OrderModel();
    billingDetails: BillingModel = new BillingModel();
    shippingDetails: ShippingModel = new ShippingModel();
    products: ProductListItemForLocal[];
    localProducts: LocalProductModel[];
    selectedPayingOption: PaymentOptionDto;
    shippingOptions: ShippingOptions[] = [];
    atpList: AtpListItem[] = [];
    paymentOptions: PaymentOptionDto[] = [];
    allTotal: number = 0;
    isLoggedIn: boolean;
    isFilledAddress: boolean;
    isDifferentAddress: boolean;
    isPayment: boolean;
    provinces: string [];
    country: string = 'Magyarország';
    currentlyCheckedShippingOption: string;
    currentlyCheckedPayingOption: string;
    actualDeliveryPrice: number = 0;


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
        this.products.forEach(product => {
            let localProductModel = this.localProducts.find(localProduct => product.id === localProduct.id);
            product.qty = localProductModel.qty;
            this.allTotal += product.qty * product.price;
        });
    }

    saveDetails() {
        if (this.localStorageService.getItemsFromLocalStorage(DETAILS_KEY).length != 0) {
            this.localStorageService.deleteItem(DETAILS_KEY);
            this.savePersonalInfo();
        }
        this.continueToAddress();
        this.savePersonalInfo();
        this.localStorageService.storeDetailsOnLocalStorage(this.personalDetails, DETAILS_KEY);
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
        this.shippingAddressForm.reset();
    }

    continueToPayment() {
        this.isFilledAddress = !this.isFilledAddress;
        this.isPayment = !this.isPayment;
        this.currentlyCheckedPayingOption = PayingOptionEnum.BARION_KARTYAS_FIZETES;
    }

    savePersonalInfo() {
        this.personalDetails = {...this.personalDetailsForm.value};
    }

    saveBillingInfo() {
        this.billingDetails = {...this.billingAddressForm.value};
        this.billingDetails.country = this.country;
        if (this.isDifferentAddress) {
            this.saveShipping();
        } else {
            this.shippingDetails = {...this.shippingAddressForm.value, ...this.billingDetails};
        }
        console.log(this.shippingDetails);
    }

    saveShipping() {
        this.shippingDetails = {...this.shippingAddressForm.value};
        this.shippingDetails.country = this.country;
    }

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
        this.order.user = this.personalDetails;
        this.order.itemId = this.localStorageService.getItemsFromLocalStorage(CART_KEY);
        this.order.billing = this.billingDetails;
        this.order.shipping = this.shippingDetails;
        this.order.paymentOption = this.currentlyCheckedPayingOption;
        console.log(this.order);
        this.sendingRequest(this.order);
    }

    sendingRequest(order: OrderModel) {
        this.checkoutService.orderCompletion();
        if (order.paymentOption === PayingOptionEnum.BARION_KARTYAS_FIZETES) {
            this.paymentService.sendingBarionOrder(order).subscribe((data) => {
                let response = data;
                response = JSON.parse(response.body);
                this.goToUrl(response.GatewayUrl);
            });
        } else {
            this.paymentService.sendingOrder(order).subscribe((orderId) => {
                    this.orderSubjectDto.orderId = orderId.message;
                    this.orderSubjectDto.totalPrice = this.allTotal;
                    console.log(this.orderSubjectDto.orderId);
                }, (error) => {handleValidationErrors(error, this.personalDetailsForm);},
                () => {
                    this.checkoutService.sendData(this.createOrderSubject(order));
                    this.router.navigate(['/']);
                });
        }
    }

    goToUrl(url: string): void {
        this.document.location.href = url;
    }

    createOrderSubject(order: OrderModel) {
        this.orderSubjectDto = {...this.orderSubjectDto, ...order};
        this.orderSubjectDto.products = this.products;
        return this.orderSubjectDto;
    }
}
