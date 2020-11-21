import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-decorate-modal',
  templateUrl: './decorate-modal.component.html',
  styleUrls: ['./decorate-modal.component.css'],
  animations: [
    trigger('slide', [
      state('normal', style(
        {'left': '{{start}}' + 'px'}
      ), {params: {start: 0}}),
      state('slideRight', style(
        {'left': '{{finish}}' + 'px'}
        ), {params: {finish: 200}}
      ),
      state('slideLeft', style(
        {'left': '{{finish}}' + 'px'}
        ), {params: {finish: -200}}
      ),
      transition('normal => slideRight',
        animate(250)),
      transition('normal => slideLeft',
        animate(250))
    ]),
    /* transition('normal => slideRight', animate(3000))*/
  ]
})
export class DecorateModalComponent implements OnInit, AfterViewInit {
  @Input() show = false;
  @ViewChild('key') eleRef: ElementRef;
  counter = 0;
  intervalId: any;
  value: number;
  state = 'normal';
  colors = [{color: 'black'}, {color: 'red'}, {color: 'blue'}, {color: 'grey'}, {color: 'white'}, {color: 'green'}];
  start = 0;
  finish = 0;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  clickClack() {
    this.show = !this.show;
  }

  moveRight() {
    this.finish = this.start + 200;
    console.log('start', this.start);
    console.log('finish', this.finish);
    this.state = 'slideRight';
  }

  moveLeft() {
    this.finish = this.start - 200;
    console.log('start', this.start);
    console.log('finish', this.finish);
    this.state = 'slideLeft';
  }

  animEnd($event: any) {
    this.state = 'normal';
    this.start = this.finish;
  }
}
