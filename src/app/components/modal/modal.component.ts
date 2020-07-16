import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [trigger('fade', [
    transition(
      ':leave', [
        style({opacity: 1}),
        animate('2s linear',
          style({opacity: 0}))
      ]
    )])]
})
export class ModalComponent implements OnInit, OnDestroy {
  show: boolean;

  constructor() {
    this.show = true;
    console.log('eleje')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.show = !this.show
    console.log('vége')
  }
}
