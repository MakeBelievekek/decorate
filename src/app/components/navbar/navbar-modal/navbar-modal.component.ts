import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AttributeModel} from '../../../models/attributeModel';
import {FilterModel} from '../../../models/filterModel';
import {ModalControllerModel} from '../../../models/modalController.model';
import {ProductCategoryModalModel} from '../../../models/ProductCategoryModalModel';
import {ModalService} from '../../../services/modal.service';
import {NavigateService} from '../../../services/navigateService';
import {RegexService} from '../../../services/regexService';

const curtainPath = '/fuggony/';
const otherPath = '';

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
    attr: string[];
    attrType: string;
    productType: string;
    productDatabaseName: string;
  };
  modalControl: ModalControllerModel;
  @Input() isShowing: boolean;
  @Input() animationState: string;
  @Output() productModalCloseAnimFinished = new EventEmitter<boolean>();
  margin: string = '0px';
  path: string = '';

  constructor(private modalService: ModalService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private regexService: RegexService,
              private navigateService: NavigateService) {

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

  closeNavigationModal() {
    this.isShowing = false;
    this.productModalCloseAnimFinished.emit(true);
  }

  setAttribute(attr: AttributeModel) {
    this.filter.attr = [];
    this.filter.attr.push(attr.description);
    this.actualProduct.productDatabaseName === null ? this.filter.attr.push(this.actualProduct.productType) : null;
  }

  sendData() {
    this.filter.productDatabaseName = this.actualProduct.productDatabaseName;
    this.filter.productType = this.actualProduct.productType;
    this.actualProduct.productDatabaseName === null ? this.filter.productDatabaseName = 'CURTAIN' : this.actualProduct.productDatabaseName;
    this.navigateService.sendData(this.filter);
  }

  buildRoute(p: ProductCategoryModalModel) {
    return p.productDatabaseName === null ?
      '/fuggony/' + this.regexService.urlWithoutAccents(p.productType) :
      '/' + this.regexService.urlWithoutAccents(p.productType);
  }
}
