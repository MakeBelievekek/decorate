import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {ModalControllerModel} from "../../models/modalController.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent implements OnInit, OnDestroy {
  modalControl: ModalControllerModel;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    console.log('modal html')
    console.log(this.modalControl);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
  }
}
