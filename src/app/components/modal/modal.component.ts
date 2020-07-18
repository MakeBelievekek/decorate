import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import * as kf from "../../utils/keyframes";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent implements OnInit {
  @Input() control: string;
  constructor() {
  }

  ngOnInit(): void {

  }

}
