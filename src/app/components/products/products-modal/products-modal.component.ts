import {Component, Input, OnInit} from '@angular/core';
import {ModalControllerModel} from "../../../models/modalController.model";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {
  modalControl: ModalControllerModel;
  @Input() modalContent: any;
  activeOrders: Array<string> = [];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }
  //TODO ez itt nem jó helyen van a filter ben kéne lennie valahogy átt kell oda rakni akár egy filter obj is belehet vezetni és annak atributum ként  oda adni

  handleActiveOrders(order:string):void {
    this.modalService.keepModalOnScreen();
    if (!this.activeOrders.includes(order)) {
      this.activeOrders.push(order);
    } else {
      this.activeOrders = this.activeOrders.filter(activeOrder => activeOrder != order);
    }
  }

  keepModalOnScreen() {
    this.modalService.keepModalOnScreen();
  }
}
