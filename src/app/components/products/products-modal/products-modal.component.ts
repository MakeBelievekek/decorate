import { Component, OnInit } from '@angular/core';
import {ModalControllerModel} from "../../../models/modalController.model";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {
  modalControl: ModalControllerModel;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }

}
