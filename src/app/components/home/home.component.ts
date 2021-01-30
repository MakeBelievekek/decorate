import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderSubjectDto } from '../../models/orderSubjectDto';
import { ProductCategoryModalModel } from '../../models/ProductCategoryModalModel';
import { ScreenSizeModel } from '../../models/ScreenSize.model';
import { CheckoutService } from '../../services/checkout.service';
import { HomeService } from '../../services/home.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

const ORDER_KEY = 'local_orderList';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

    screenSize: ScreenSizeModel = new ScreenSizeModel();
    images;
    darkenerImg: string;
    translucentImg: string;
    blackoutImg: string;
    childrenImg: string;
    decorationImg: string;
    pillowImg: string;
    wallpaperImg: string;
    furnitureFabricImg: string;
    paymentId: string;
    attributes: ProductCategoryModalModel[] = [];
    order: OrderSubjectDto = new OrderSubjectDto();

    constructor(private productService: ProductService, private homeService: HomeService, private route: ActivatedRoute,
                private paymentService: PaymentService, private toastr: ToastrService, private localStorageService: LocalStorageService,
                private screenService: ScreenService, private checkoutService: CheckoutService) {
    }

    ngOnInit(): void {
        this.changeContentOnResize();
        this.images = this.route.snapshot.data.images;
        this.route.queryParams.subscribe(params => {
            this.paymentId = params['paymentId'];
            if (this.paymentId) {
                this.paymentService.completePayment(this.paymentId).subscribe((data) => {
                    this.order = this.localStorageService.getItemsFromLocalStorage(ORDER_KEY);
                    this.localStorageService.deleteItem(ORDER_KEY);
                    this.order.openModal = data.paymentStatus === 'Succeeded';
                    this.order.orderNumber = data.orderId;
                   // this.order.openModal = true;
                }, () => {}, () => {
                    if (!this.order.openModal)
                        this.toastr.error('Sikertelen vásárlás');
                    else
                        this.checkoutService.openModal(true);
                });
            } else {
                this.order = this.localStorageService.getItemsFromLocalStorage(ORDER_KEY);
                if (this.order.openModal)
                    this.checkoutService.openModal(true);
            }
        });

        for (let im of this.images) {
            switch (im.type) {
                case 'Darkener': {
                    this.darkenerImg = im.imgUrl;
                    break;
                }
                case 'Blackout': {
                    this.blackoutImg = im.imgUrl;
                    break;
                }
                case 'Wallpaper': {
                    this.wallpaperImg = im.imgUrl;
                    break;
                }
                case 'Translucent': {
                    this.translucentImg = im.imgUrl;
                    break;
                }
                case 'Pillow': {
                    this.pillowImg = im.imgUrl;
                    break;
                }
                case 'Children': {
                    this.childrenImg = im.imgUrl;
                    break;
                }
                case 'Decoration': {
                    this.decorationImg = im.imgUrl;
                    break;
                }
                case 'FurnitureFabric': {
                    this.furnitureFabricImg = im.imgUrl;
                    break;
                }
            }
        }
    }

    openModal() {
        this.checkoutService.openModal(true);
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }

    ngOnDestroy(): void {
    }

}
