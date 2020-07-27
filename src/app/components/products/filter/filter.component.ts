import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {ModalControllerModel} from "../../../models/modalController.model";
import {ScreenService} from "../../../services/screen.service";
import {FilterService} from "../../../services/filter.service";
import {FilterControlModel} from "../../../models/filterControl.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  modalControl: ModalControllerModel;
  filterControl: FilterControlModel;
  top: number;
  @Output() productContentScreenAttributes: EventEmitter<string>;

  constructor(private modalService: ModalService,
              private screenService: ScreenService,
              private filterService: FilterService) {
    this.productContentScreenAttributes = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    this.filterControl = this.filterService.filterControl;
  }

  toggleOrderModal() :void{
    this.modalService.toggleModal('order');
  }

  toggleColorModal() :void {
    this.productContentScreenAttributes.emit("show");
    this.top = this.screenService.getContentHeight() + 7;
    this.modalService.toggleModal('color');
  }

  toggleDesignModal() :void{
    this.productContentScreenAttributes.emit("show");
    this.top = this.screenService.getContentHeight() + 7;
    this.modalService.toggleModal('design');
  }

  handleActiveOrders(order:string):void {
    this.filterService.handleActiveOrders(order);
  }

  handleActiveColors(color:string):void {
    this.filterService.handleActiveColors(color);
  }

  handleActiveDesigners(designer:string):void {
    this.filterService.handleActiveDesigners(designer);
  }

  clearColorFilters():void {
    this.filterService.clearColorFilters();
  }

  clearDesignerFilters():void {
    this.filterService.clearDesignerFilters();
  }

}
