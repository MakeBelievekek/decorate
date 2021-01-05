import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { ProductCategoryModalModel } from '../../models/ProductCategoryModalModel';
import { ProductListItemForLocal } from '../../models/productListItemForLocal';
import { ScreenSizeModel } from '../../models/ScreenSize.model';
import { CheckoutService } from '../../services/checkout.service';
import { HomeService } from '../../services/home.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
    products: ProductListItemForLocal[] = [];

    constructor(private productService: ProductService, private home: HomeService, private route: ActivatedRoute,
                private paymentService: PaymentService, private toastr: ToastrService,
                private screenService: ScreenService, private checkoutService: CheckoutService) {
    }

    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };


    ngOnInit(): void {
        this.checkoutService.productsObservable$.pipe(take(1)).subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
        this.changeContentOnResize();
        this.images = this.route.snapshot.data.images;
        this.route.queryParams.subscribe(params => {
            this.paymentId = params['paymentId'];
            if (this.paymentId) {
                this.paymentService.completePayment(this.paymentId).subscribe((data) => {
                    this.showSuccessPayment(data.paymentStatus);
                });
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

    showSuccessPayment(result: string) {
        if (result === 'Succeeded')
            this.toastr.success('Sikeres fizetés');
        else {
            this.toastr.error('Sikertelen fizetés');
        }
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }


}
