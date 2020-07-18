import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {ModalControllerModel} from "../models/ModalController.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  showModalState: Subject<ModalControllerModel> = new Subject<ModalControllerModel>();
  showModal: boolean;

  constructor() {
    this.showModal = false;
    this.showModalState.next({control: '', show: false})
  }

  bodyClick() {
    this.showModalState.next({control: '', show: false});
  }
}
