import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeModel } from '../../../models/attributeModel';
import { FilterModel } from '../../../models/filterModel';
import { ModalControllerModel } from '../../../models/modalController.model';
import { ProductCategoryModalModel } from '../../../models/ProductCategoryModalModel';
import { ModalService } from '../../../services/modal.service';

const curtainPath = '/termekkategoriak/fuggonyok/';
const otherPath = '/termekkategoriak/';

@Component({
    selector: 'app-navbar-modal',
    templateUrl: './navbar-modal.component.html',
    styleUrls: ['./navbar-modal.component.css'],
})
export class NavbarModalComponent implements OnInit {

    @Input() products: ProductCategoryModalModel[] = [];

    actualProduct: ProductCategoryModalModel = new class implements ProductCategoryModalModel {
        color: boolean;
        colorList: AttributeModel[];
        isShown: boolean;
        pattern: boolean;
        patternList: AttributeModel[];
        productDatabaseName: string;
        productType: string;
        style: boolean;
        styleList: AttributeModel[];
    };
    filter: FilterModel = new class implements FilterModel {
        attr: string;
        attrType: string;
        productType: string;
    };
    modalControl: ModalControllerModel;
    @Input() isShowing: boolean;
    @Input() animationState: string;
    @Output() productModalCloseAnimFinished = new EventEmitter<boolean>();
    margin: string = '0px';

    constructor(private modalService: ModalService, private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.actualProduct = this.products[0];
        this.modalControl = this.modalService.modalControl;
    }

    keepModalOnScreen() {
        this.closeNavigationModal();
    }


    visible(product: ProductCategoryModalModel) {
        this.products.forEach(value => {
            value.isShown = false;
            value.color = false;
            value.pattern = false;
            value.style = false;
        });
        product.isShown = !product.isShown;
        this.actualProduct = product;
        switch (this.actualProduct) {
            case this.products[0]: {
                this.margin = '0px';
                break;
            }
            case this.products[1]: {
                this.margin = '64px';
                break;
            }
            case this.products[2]: {
                this.margin = '128px';
                break;
            }
            case this.products[3]: {
                this.margin = '192px';
                break;
            }
            /*        case this.products[4]: {
                       this.margin = '256px';
                       break;
                   }
                   case this.products[5]: {
                       this.margin = '320px';
                       break;
                   }*/
        }
    }

    attrVisible(attr: string) {
        switch (attr) {
            case 'color': {
                this.actualProduct.color = true;
                this.actualProduct.pattern = false;
                this.actualProduct.style = false;
                break;
            }
            case 'pattern': {
                this.actualProduct.color = false;
                this.actualProduct.pattern = true;
                this.actualProduct.style = false;
                break;
            }
            case 'style': {
                this.actualProduct.color = false;
                this.actualProduct.pattern = false;
                this.actualProduct.style = true;
                break;
            }
        }
    }

    curtainNavigate(url: string) {
        this.router.navigateByUrl(curtainPath + url);
    }

    otherNavigate(url: string) {
        this.router.navigateByUrl(otherPath + url);
    }

    closeNavigationModal() {
        this.isShowing = false;
        this.productModalCloseAnimFinished.emit(true);
    }

    saveAttribute(attr: string) {
        this.filter.attr = attr;
        this.filter.productType = this.actualProduct.productDatabaseName;
        if (this.actualProduct.style) {
            this.filter.attrType = 'style';
        }
        if (this.actualProduct.color) {
            this.filter.attrType = 'color';
        }
        if (this.actualProduct.pattern) {
            this.filter.attrType = 'pattern';
        }
        this.buildPath(this.filter);
    }

    buildPath(filter: FilterModel) {
        let path = '';
        if (filter.productType === 'ifjusagi' || filter.productType === 'blackout' ||
            filter.productType === 'fenyatereszto' || filter.productType === 'sotetito') {
            path = curtainPath;
        } else {
            path = otherPath;
        }
        this.router.navigate([path], {
            relativeTo: this.activatedRoute,
            queryParams: {
                termekkategoria: filter.productType,
                tipus: filter.attrType,
                attributum: filter.attr,
            },
            queryParamsHandling: 'merge',
        });

    }
}
