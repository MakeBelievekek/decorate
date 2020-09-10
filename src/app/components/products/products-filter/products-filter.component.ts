import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FilterControlModel } from '../../../models/filterControl.model';
import { ModalControllerModel } from '../../../models/modalController.model';
import { ScreenControlModel } from '../../../models/screenControl.model';
import { FilterService } from '../../../services/filter.service';
import { ModalService } from '../../../services/modal.service';
import { ScreenService } from '../../../services/screen.service';


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
    this.filterControl.activeOrder = this.filterService.filterControl.order[0];
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
    if (this.filterService.isActiveColorFiltersEmpty()) {
      this.showSmallColorFilter = false;
    } else {
      this.showSmallColorFilter = true;
    }
  }

  handleActiveOrders(order: string): void {
    this.filterService.handleActiveOrder(order);
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
  }

  getTopOfSetAndWidth(): any {
    const topOffset = this.filterControlContainer.nativeElement.offsetTop + this.filterControlContainer.nativeElement.offsetHeight;
    const contentWidth = this.filterControlContainer.nativeElement.offsetWidth;
    return {top: topOffset, width: contentWidth};
  }
}
