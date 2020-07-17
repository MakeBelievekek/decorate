import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  showModalState: Subject<boolean> = new Subject<boolean>();
  showModal: boolean;

  constructor() {
    this.showModal = false;
  }

  bodyClick() {
    this.showModal = false;
    this.showModalState.next(false);
  }



}
