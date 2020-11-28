import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ScreenSizeModel } from '../../models/ScreenSize.model';
import { HomeService } from '../../services/home.service';
import { LoadingService } from '../../services/loading.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

const CASH_KEY = 'valami';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    constructor(private productService: ProductService, private home: HomeService, private route: ActivatedRoute,
                private paymentService: PaymentService, private toastr: ToastrService
        , private screenService: ScreenService, private localStorageService: LocalStorageService
        , private loadingService: LoadingService) {
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
            if (im.type == 'Darkener') {
                this.darkenerImg = im.imgUrl;
            }
            if (im.type == 'Blackout') {
                this.blackoutImg = im.imgUrl;
                console.log(this.blackoutImg);
            }
            if (im.type == 'Wallpaper') {
                this.wallpaperImg = im.imgUrl;
            }
            if (im.type == 'Translucent') {
                this.translucentImg = im.imgUrl;
            }
            if (im.type == 'Pillow') {
                this.pillowImg = im.imgUrl;

            }
            if (im.type == 'Children') {
                this.childrenImg = im.imgUrl;
            }
            if (im.type == 'Decoration') {
                this.decorationImg = im.imgUrl;
            }
            if (im.type == 'FurnitureFabric') {
                this.furnitureFabricImg = im.imgUrl;
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
}
