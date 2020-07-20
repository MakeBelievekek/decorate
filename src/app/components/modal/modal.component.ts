import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import * as kf from "../../utils/keyframes";
import {ModalService} from "../../services/modal.service";
import {ModalControllerModel} from "../../models/ModalController.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent implements OnInit, OnDestroy {
  modalState: ModalControllerModel;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.modalService.showModalState.subscribe(
      value => this.modalState = value
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
  }
}
