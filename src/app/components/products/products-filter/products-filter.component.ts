import {Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ModalControllerModel} from '../../../models/modalController.model';
import {ScreenControlModel} from '../../../models/screenControl.model';
import {ActiveFilterService} from '../../../services/active-filter.service';
import {ModalService} from '../../../services/modal.service';
import {ScreenService} from '../../../services/screen.service';
import {ActivatedRoute} from '@angular/router';
import {map, pluck, shareReplay, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {AttributeModel} from '../../../models/attributeModel';
import {ProductAttributes} from '../../../models/productAttributes';
import * as _ from 'lodash';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  modalControl: ModalControllerModel;
  filterControl: FilterControlModel;
  screenControl: ScreenControlModel;
  smallScreen: boolean;
  isOrderDropdownOpen: boolean;
  isColorDropdownOpen: boolean;
  colorButtonTopOffSet: number;
  colorButtonLeftOffSet: number;
  dimmerOfSet: number;
  dimmerHeight: number;
  colorDropdownOpen: boolean;
  dropDownMeasurements: any = {top: 0, width: 0};
  @Output() productContentScreenAttributes: EventEmitter<string>;
  @ViewChild('filterControlContainer') filterControlContainer: ElementRef;
  @ViewChild('colourElement') colorElement: ElementRef;
  @ViewChild('orderButton') orderButton: ElementRef;
  showSmallColorFilter: boolean;
  showDimmer: boolean;
  productAttributes$: Observable<ProductAttributes>;
  colors$: Observable<Array<AttributeModel>>;
  patterns$: Observable<Array<AttributeModel>>;
  styles$: Observable<Array<AttributeModel>>;
  compositions$: Observable<Array<AttributeModel>>;

  constructor(private modalService: ModalService,
              private screenService: ScreenService,
              private activeFilterService: ActiveFilterService,
              private route: ActivatedRoute) {
    this.productContentScreenAttributes = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    this.filterControl = this.activeFilterService.filterControl;
    this.screenControl = this.screenService.screenControl;
    this.filterControl.activeOrder = this.activeFilterService.filterControl.order[0];
    this.screenService.getScreenSize().width < 1001 ? this.smallScreen = true : this.smallScreen = false;

    this.productAttributes$ = this.activeFilterService.activeProductAttributes$.pipe(
      shareReplay(),
    );

    this.colors$ = this.productAttributes$.pipe(
      pluck('colorList'),
    );

    this.patterns$ = this.productAttributes$.pipe(
      pluck('patternList'),
    );
    this.styles$ = this.productAttributes$.pipe(
      pluck('styleList'),
    );
    this.compositions$ = this.productAttributes$.pipe(
      pluck('compositionList'),
    );
  }

  // TODO be le kell rakni egy plusz feltételt amikor pici dropdown van akkor más mutason
  toggleOrderModal(): void {
    this.isColorDropdownOpen = false;
    this.isOrderDropdownOpen = !this.isOrderDropdownOpen;
  }

  toggleColorModal(): void {
    if (!this.smallScreen) {
      this.colorDropdownOpen = !this.colorDropdownOpen;
      this.colorButtonTopOffSet = this.colorElement.nativeElement.getBoundingClientRect().top
        + this.colorElement.nativeElement.getBoundingClientRect().height;
      this.colorButtonLeftOffSet = this.colorElement.nativeElement.getBoundingClientRect().left;

      this.dimmerOfSet = this.filterControlContainer.nativeElement.getBoundingClientRect().top
        + Math.abs(document.body.getBoundingClientRect().top) + this.colorElement.nativeElement.getBoundingClientRect().height
        + 5;
      console.log(this.dimmerOfSet);
      this.dimmerHeight = document.body.scrollHeight - this.dimmerOfSet;
      this.showDimmer = !this.showDimmer;
    }

    if (this.showSmallColorFilter) {
      this.showSmallColorFilter = false;
    }
    this.isOrderDropdownOpen = false;
    this.isColorDropdownOpen = !this.isColorDropdownOpen;
  }

  toggleDesignModal(): void {
    this.productContentScreenAttributes.emit('show');
    this.dropDownMeasurements = this.getTopOfSetAndWidth();
    this.dropDownMeasurements.top += 6;
    this.modalService.toggleModal('design');
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenService.getScreenSize().width < 1001 ? this.smallScreen = true : this.smallScreen = false;
  }

  handleActiveOrders(order: string): void {
    this.activeFilterService.handleActiveOrder(order);
  }

  toggleSmallColorFilter() {
    this.showSmallColorFilter = !this.showSmallColorFilter;
  }

  getTopOfSetAndWidth(): any {
    const topOffset = this.filterControlContainer.nativeElement.offsetTop + this.filterControlContainer.nativeElement.offsetHeight;
    const contentWidth = this.filterControlContainer.nativeElement.offsetWidth;
    return {top: topOffset, width: contentWidth};
  }
}
