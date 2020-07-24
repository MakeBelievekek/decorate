import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {ModalControllerModel} from "../../../models/modalController.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  content: any = {order: ['lehetőség 1', 'lehetőség 2', 'lehetőség 3', 'lehetőség 4', "lehetőség 5", 'lehetőség 6'],
                  color: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok']};
  modalControl: ModalControllerModel;
  activeOrders: Array<string> = [];

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }

  toggleOrderModal() {
    this.modalService.toggleModal('order');
    console.log(this.modalControl);
  }

  toggleColorModal() {
    this.modalService.toggleModal('color');
  }

  handleActiveOrders(order:string):void {
    if (!this.activeOrders.includes(order)) {
      this.activeOrders.push(order);
    } else {
      this.activeOrders = this.activeOrders.filter(activeOrder => activeOrder != order);
    }
  }

  toggleDesignModal() {
    this.modalService.toggleModal('design');
  }

}
