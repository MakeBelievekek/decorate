import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalControllerModel } from '../../../models/modalController.model';
import { NavbarImageModel } from '../../../models/navbarImageModel';
import { ModalService } from '../../../services/modal.service';

const curtainPath = '/termekkategoriak/fuggonyok/';
const otherPath = '/termekkategoriak/';

@Component({
    selector: 'app-navbar-modal',
    templateUrl: './navbar-modal.component.html',
    styleUrls: ['./navbar-modal.component.css'],
})
export class NavbarModalComponent implements OnInit {
    colors: string[] = ['kék', 'sárga', 'zöld', 'piros', 'fehér', 'fekete', 'rózsaszín', 'lila'];
    curtains: NavbarImageModel[] = [
        {imageType: 'blackout', imgUrl: 'https://i.imgur.com/skSjNC7.jpg', navigationUrl: 'blackout'},
        {imageType: 'ifjusági', imgUrl: 'https://i.imgur.com/KccMcuE.jpg', navigationUrl: 'ifjusagi'},
        {imageType: 'sötétítő', imgUrl: 'https://i.imgur.com/1nyTupT.jpg', navigationUrl: 'sotetito'},
        {imageType: 'fényáteresztő', imgUrl: 'https://i.imgur.com/yxO6nVd.jpg', navigationUrl: 'fenyatereszto'},

    ];
    otherProducts: NavbarImageModel[] = [{
        imageType: 'párnák', imgUrl: 'https://i.imgur.com/9Vn98K4.jpg', navigationUrl: 'parna',
    },
        {imageType: 'tapéták', imgUrl: 'https://i.imgur.com/wjoNXAQ.jpg', navigationUrl: 'tapeta'},
        {imageType: 'textilek', imgUrl: 'https://i.imgur.com/PKnlBMP.jpg', navigationUrl: 'textilkiegeszito'},
        {imageType: 'dekorációk', imgUrl: 'https://i.imgur.com/t05z935.jpg', navigationUrl: 'lakasdekoracio'}];
    modalControl: ModalControllerModel;
    isColorVisible: boolean = true;
    isCurtainVisible: boolean = false;
    isStyleVisible: boolean = false;
    isOtherVisible: boolean = false;
    firstImage: string = 'https://i.imgur.com/1nyTupT.jpg';
    actualImage: string = 'https://i.imgur.com/1nyTupT.jpg';

    constructor(private modalService: ModalService, private router: Router) {
    }

    ngOnInit(): void {
        this.modalControl = this.modalService.modalControl;
    }

    keepModalOnScreen() {
        this.modalService.keepModalOnScreen();
    }


    visible(chooise: string) {
        switch (chooise) {
            case 'color': {
                this.isColorVisible = true;
                this.isCurtainVisible = false;
                this.isOtherVisible = false;
                this.isStyleVisible = false;
                break;
            }
            case 'curtain': {
                this.isColorVisible = false;
                this.isOtherVisible = false;
                this.isStyleVisible = false;
                this.isCurtainVisible = true;
                break;
            }
            case 'style': {
                this.isStyleVisible = true;
                this.isColorVisible = false;
                this.isCurtainVisible = false;
                this.isOtherVisible = false;
                break;
            }
            case 'other': {
                this.isOtherVisible = true;
                this.isStyleVisible = false;
                this.isColorVisible = false;
                this.isCurtainVisible = false;
                break;
            }
        }
    }

    showPicture(actual: string) {
        this.actualImage = actual;
    }

    firstImageRender() {
        this.actualImage = this.firstImage;
    }

    curtainNavigate(url: string) {
        this.router.navigateByUrl(curtainPath + url);
    }

    otherNavigate(url: string) {
        this.router.navigateByUrl(otherPath + url);
    }
}
