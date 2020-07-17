import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [trigger('fade', [
    transition(
      '* => void', [
        style({opacity: 1}),
        animate('1s linear',
          style({opacity: 0}))
      ]
    )])]
})
export class ModalComponent implements OnInit {
  @Input() control: string;
  constructor() {
  }

  ngOnInit(): void {

  }

}
