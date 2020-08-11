import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ModalControllerModel} from '../../../models/modalController.model';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ModalService} from '../../../services/modal.service';
import {ScreenService} from '../../../services/screen.service';
import {FilterService} from '../../../services/filter.service';
import {ScreenControlModel} from '../../../models/screenControl.model';


@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  modalControl: ModalControllerModel;
  filterControl: FilterControlModel;
  screenControl: ScreenControlModel;
  dropDownMeasurements: any = {top: 0, width: 0};
  @Output() productContentScreenAttributes: EventEmitter<string>;
  @ViewChild('filterControlContainer') filterControlContainer: ElementRef;
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
  }

  // TODO be le kell rakni egy plusz feltételt amikor pici dropdown van akkor más mutason
  toggleOrderModal(): void {
    this.modalService.toggleModal('order');
    if (this.modalControl.control === 'order' && this.modalControl.showModal && this.screenControl.smallDropdown) {
    }
  }

  toggleColorModal(): void {
    this.productContentScreenAttributes.emit('show');
    this.dropDownMeasurements = this.getTopOfSetAndWidth();
    this.dropDownMeasurements.top += 6;
    this.modalService.toggleModal('color');
  }

  toggleDesignModal(): void {
    this.productContentScreenAttributes.emit('show');
    this.dropDownMeasurements = this.getTopOfSetAndWidth();
    this.dropDownMeasurements.top += 6;
    this.modalService.toggleModal('design');
  }

  toggleFilterModal(): void {
    this.modalService.toggleModal('filter');
  }

  handleActiveOrders(order: string): void {
    this.filterService.handleActiveOrders(order);
  }

  handleActiveColors(color: string): void {
    this.filterService.handleActiveColors(color);
  }

  handleActiveDesigners(designer: string): void {
    this.filterService.handleActiveDesigners(designer);
  }

  clearColorFilters(): void {
    this.filterService.clearColorFilters();
  }

  clearDesignerFilters(): void {
    this.filterService.clearDesignerFilters();
  }


  toggleSmallColorFilter() {
    this.showSmallColorFilter = !this.showSmallColorFilter;
    console.log(this.showSmallColorFilter);
  }

  getTopOfSetAndWidth(): any {
    const topOffset = this.filterControlContainer.nativeElement.offsetTop + this.filterControlContainer.nativeElement.offsetHeight;
    const contentWidth = this.filterControlContainer.nativeElement.offsetWidth;
    return {top: topOffset, width: contentWidth};
  }
}
