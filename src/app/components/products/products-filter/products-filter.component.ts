import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ModalControllerModel} from '../../../models/modalController.model';
import {ScreenControlModel} from '../../../models/screenControl.model';
import {ActiveFilterService} from '../../../services/active-filter.service';
import {ModalService} from '../../../services/modal.service';
import {ScreenService} from '../../../services/screen.service';
import {ActivatedRoute} from '@angular/router';
import {map, pluck, shareReplay, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ProductsModalComponent} from '../products-modal/products-modal.component';
import {MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS} from '@angular/material/button-toggle';


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
  filterAttributes$: Observable<ProductsModalComponent>;


  constructor(private modalService: ModalService,
              private screenService: ScreenService,
              private filterService: ActiveFilterService,
              private route: ActivatedRoute) {
    this.productContentScreenAttributes = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    this.filterControl = this.filterService.filterControl;
    this.screenControl = this.screenService.screenControl;
    this.filterControl.activeOrder = this.filterService.filterControl.order[0];
    this.screenService.getScreenSize().width < 1001 ? this.smallScreen = true : this.smallScreen = false;

    this.filterAttributes$ = this.route.data.pipe(
      take(1),
      pluck('productList'),
      shareReplay(),
      map(([categories, productList]) => categories)
    );
    this.route.queryParams.subscribe(value => {
      console.log('Filternél rá kell iratkozni a queryparamsra');
    });
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
    /* this.productContentScreenAttributes.emit('show');
     this.dropDownMeasurements = this.getTopOfSetAndWidth();
     this.dropDownMeasurements.top += 6;
     this.modalService.toggleModal('color');*/
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
    this.filterService.handleActiveOrder(order);
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
