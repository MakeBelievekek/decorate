import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {ModalControllerModel} from "../../../models/modalController.model";

@Component({
  selector: 'app-navbar-modal',
  templateUrl: './navbar-modal.component.html',
  styleUrls: ['./navbar-modal.component.css']
})
export class NavbarModalComponent implements OnInit {

  modalControl: ModalControllerModel;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }

  keepModalOnScreen() {
    this.modalService.keepModalOnScreen();
  }


}
