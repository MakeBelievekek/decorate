import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeModel } from '../../../models/attributeModel';
import { FilterModel } from '../../../models/filterModel';
import { ModalControllerModel } from '../../../models/modalController.model';
import { ProductCategoryModalModel } from '../../../models/ProductCategoryModalModel';
import { SearchModel } from '../../../models/searchModel';
import { ActiveFilterService } from '../../../services/active-filter.service';
import { ModalService } from '../../../services/modal.service';
import { RegexService } from '../../../services/regexService';

const curtainPath = '/fuggony/';
const otherPath = '';

@Component({
    selector: 'app-navbar-modal',
    templateUrl: './navbar-modal.component.html',
    styleUrls: ['./navbar-modal.component.css'],
})
export class NavbarModalComponent implements OnInit, OnDestroy {

    @Input() products: ProductCategoryModalModel[] = [];

    actualProduct = new ProductCategoryModalModel();
    filter = new FilterModel();
    modalControl: ModalControllerModel;
    @Input() isShowing: boolean;
    @Input() animationState: string;
    @Output() productModalCloseAnimFinished = new EventEmitter<boolean>();
    margin = '0px';
    path = '';
    params: any;

    constructor(private modalService: ModalService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private regexService: RegexService,
                private activeFilterService: ActiveFilterService,
    ) {

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
        let actual = this.products.indexOf(this.actualProduct);
        let max = this.products.length - 3;
        this.margin = actual > max ? max * 64 + 'px' : actual * 64 + 'px';

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

    closeNavigationModal() {
        this.isShowing = false;
        this.productModalCloseAnimFinished.emit(true);
    }

    buildRoute(p: ProductCategoryModalModel): Array<string> {
        return p.productDatabaseName === null ?
            ['termekek', 'fuggony', this.regexService.urlWithoutAccents(p.productType)] :
            ['termekek', this.regexService.urlWithoutAccents(p.productType)];
    }

    generateParams(searchModel: SearchModel): any {
        if (searchModel) {
            const {subType, ...rest} = searchModel;
            return rest;
        }
    }

    generateParamsWhitAttribute(actualProduct: ProductCategoryModalModel, attribute: AttributeModel): any {
        const searchModel = {...actualProduct.searchModel};
        searchModel.attributeIds = [attribute.id];

        return this.generateParams(searchModel);
    }

    navigateWhitAttribute(actualProduct: ProductCategoryModalModel, attribute: AttributeModel) {
        const searchModelForQueryParams = this.generateParamsWhitAttribute(actualProduct, attribute);
        const route = this.buildRoute(actualProduct);

        this.router.navigate(route, {queryParams: {...searchModelForQueryParams}});
    }

    navigateWhitMainType(product: ProductCategoryModalModel) {
        const searchModelForQueryParams = this.generateParams(product.searchModel);
        const route = this.buildRoute(product);

        this.router.navigate(route, {queryParams: {...searchModelForQueryParams}});
    }

    ngOnDestroy(): void {
    }
}
