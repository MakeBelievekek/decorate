import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {ModalControllerModel} from "./models/modalController.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'decorate';
  modalControl: ModalControllerModel;
  bodyPressed: boolean;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
  }

  closeModal() {
    if (this.modalControl.keepShowingModal && this.bodyPressed) {
      this.modalService.setModalButtonPressedFalse();
      this.bodyPressed = false;
    } else {
      this.modalService.closeModal();
    }
  }

  bodyClick() {
    this.bodyPressed = true;
    this.closeModal();
  }
}
