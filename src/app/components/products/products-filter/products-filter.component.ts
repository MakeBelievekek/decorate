import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ModalControllerModel} from '../../../models/modalController.model';
import {ScreenControlModel} from '../../../models/screenControl.model';
import {FilterService} from '../../../services/filter.service';
import {ModalService} from '../../../services/modal.service';
import {ScreenService} from '../../../services/screen.service';


@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit, AfterViewInit {
  modalControl: ModalControllerModel;
  filterControl: FilterControlModel;
  screenControl: ScreenControlModel;
  smallScreen: boolean;
  isOrderDropdownOpen: boolean;
  isColorDropdownOpen: boolean;
  colorButtonTopOffSet: number;
  colorButtonLeftOffSet: number;
  dimmerOfSet: number;
  showDimmer: boolean;
  dimmerHeight: number;
  colorDropdownOpen: boolean;
  dropDownMeasurements: any = {top: 0, width: 0};
  @Output() productContentScreenAttributes: EventEmitter<string>;
  @ViewChild('filterControlContainer') filterControlContainer: ElementRef;
  @ViewChild('colourElement') colorElement: ElementRef;
  @ViewChild('orderButton') orderButton: ElementRef;
  showSmallColorFilter: boolean;


  constructor(private modalService: ModalService,
              private screenService: ScreenService,
              private filterService: FilterService) {
    this.productContentScreenAttributes = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    this.filterControl = this.filterService.filterControl;
    this.screenControl = this.screenService.screenControl;
    this.filterControl.activeOrder = this.filterService.filterControl.order[0];
    this.screenService.getScreenSize().width < 1001 ? this.smallScreen = true : this.smallScreen = false;


  }

  // TODO be le kell rakni egy plusz feltételt amikor pici dropdown van akkor más mutason
  toggleOrderModal(): void {
    this.isColorDropdownOpen = false;
    this.isOrderDropdownOpen = !this.isOrderDropdownOpen;


    /* this.modalService.toggleModal('order');
     if (this.modalControl.control === 'order' && this.modalControl.showModal && this.screenControl.smallDropdown) {
     }*/
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

  ngAfterViewInit(): void {
   /* console.log('x is : ', this.filterControlContainer.nativeElement.getBoundingClientRect());
    console.log('bodyclientrect : ', document.body.getBoundingClientRect());
    console.log('scroll height : ', document.body.scrollHeight);
    console.log('akkor ez a távolság az: ', this.filterControlContainer.nativeElement.getBoundingClientRect().top
      + Math.abs(document.body.getBoundingClientRect().top));*/
  }
}
