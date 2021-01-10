import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { OrderSubjectDto } from '../../models/orderSubjectDto';
import { ProductCategoryModalModel } from '../../models/ProductCategoryModalModel';
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

    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };
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
    products: OrderSubjectDto;
    foundOrder: boolean = false;

    constructor(private productService: ProductService, private homeService: HomeService, private route: ActivatedRoute,
                private paymentService: PaymentService, private toastr: ToastrService,
                private screenService: ScreenService, private checkoutService: CheckoutService) {
    }

    ngOnInit(): void {
        console.log('COMPONENT')
        this.checkoutService.orderObservable$
            .pipe(take(1))
            .subscribe((data) => {
                this.foundOrder = data;
                console.log(data);
            });
        this.checkoutService.productsObservable$
            .pipe(take(1))
            .subscribe((data) => {
                this.products = data;
                console.log(this.products);
            });
        this.changeContentOnResize();
        this.images = this.route.snapshot.data.images;
        this.route.queryParams.subscribe(params => {
            this.paymentId = params['paymentId'];
            if (this.paymentId) {
                this.paymentService.completePayment(this.paymentId).subscribe((data) => {
                    this.showSuccessPayment(data.message);
                });
            }
        });
        if (this.foundOrder) {
            this.checkoutService.openModal();
        }
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
