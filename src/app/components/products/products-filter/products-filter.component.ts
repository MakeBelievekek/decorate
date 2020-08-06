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
  @ViewChild('smallOrderDropDownContainer') smallOrderDropDownContainer: ElementRef;


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
      this.screenService.setSmallOrderDropDownContainer(this.smallOrderDropDownContainer);
      console.log(this.screenService.getSmallOrderDropDownContainerHeight());
    }

  }

  toggleColorModal(): void {
    this.productContentScreenAttributes.emit('show');
    this.dropDownMeasurements = this.screenService.getContentMeasurements();
    this.dropDownMeasurements.top += 7;
    this.modalService.toggleModal('color');
  }

  toggleDesignModal(): void {
    this.productContentScreenAttributes.emit('show');
    this.dropDownMeasurements = this.screenService.getContentMeasurements();
    this.dropDownMeasurements.top += 7;
    this.modalService.toggleModal('design');
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



}
