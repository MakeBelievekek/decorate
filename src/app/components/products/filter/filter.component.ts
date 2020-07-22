import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {ModalControllerModel} from "../../../models/modalController.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  content: any = {order: ['lehetőség 1', 'lehetőség 2', 'lehetőség 3', 'lehetőség 4', "lehetőség 5", 'lehetőség 6']};
  modalControl: ModalControllerModel;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }

  toggleOrderModal() {
    this.modalService.toggleModal('order');
  }
}
