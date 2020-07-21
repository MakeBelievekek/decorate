import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {ModalControllerModel} from "../models/modalController.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  openModals: Array<string> = [];
  modalControl: ModalControllerModel;


  constructor() {
    this.modalControl = {control: '', showModal: false, modalButtonPressed: false}
  }

  closeModal() {
    this.openModals.forEach(openModal => {
      this.modalControl.control = openModal;
      this.modalControl.showModal = false;
    });
    this.openModals.splice(0, this.openModals.length);
  }

  toggleModal(control: string): void {
    this.modalControl.control = control;
    this.modalControl.showModal = !this.modalControl.showModal;

    if (this.modalControl.showModal) {
      this.addToOpenModals(control);
    } else if (!this.modalControl.showModal) {
      this.openModals = this.filterFromOpenModals(control);
    }
    this.modalControl.modalButtonPressed = true;
  }

  addToOpenModals(control: string): void {
    if (!this.openModals.includes(control)) {
      this.openModals.push(control);
    }
  }

  filterFromOpenModals(control: string): Array<string> {
    if (this.openModals.includes(control)) {
      return this.openModals.filter(openControls => openControls != control);
    }
    return this.openModals;
  }

  setModalButtonPressedFalse() {
    this.modalControl.modalButtonPressed = false;
  }

}
