import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ScreenSizeModel } from '../../models/ScreenSize.model';
import { HomeService } from '../../services/home.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

const CASH_KEY = 'valami';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    loaded: boolean = false;

    constructor(private productService: ProductService, private home: HomeService, private route: ActivatedRoute,
                private paymentService: PaymentService, private toastr: ToastrService,
                private screenService: ScreenService) {
    }

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


    ngOnInit(): void {
        this.changeContentOnResize();
        this.images = this.route.snapshot.data.images;
        this.route.queryParams.subscribe(params => {
            this.paymentId = params['paymentId'];
            if (this.paymentId) {
                this.paymentService.completePayment(this.paymentId).subscribe(() => {});
                this.showSuccessPayment();
            }
        }, () => {}, () => {
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

    showSuccessPayment() {
        this.toastr.success('Sikeres Fizetés');
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }

    ngAfterViewInit(): void {

    }


}
