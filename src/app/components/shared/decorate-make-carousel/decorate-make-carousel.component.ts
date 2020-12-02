import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-decorate-make-carousel',
  templateUrl: './decorate-make-carousel.component.html',
  styleUrls: ['./decorate-make-carousel.component.css'],
  animations: [
    trigger('slide', [
      state('normal', style(
        {left: '{{start}}' + '{{unitOfMeasure}}'}
      ), {params: {start: 0, unitOfMeasure: 'px'}}),
      state('slideRight', style(
        {left: '{{finish}}' + '{{unitOfMeasure}}'}
        ), {params: {finish: 200, unitOfMeasure: 'px'}}
      ),
      state('slideLeft', style(
        {left: '{{finish}}' + '{{unitOfMeasure}}'}
        ), {params: {finish: 200, unitOfMeasure: 'px'}}
      ),
      transition('normal => slideRight',
        animate(250)),
      transition('normal => slideLeft',
        animate(250))
    ]),
    /* transition('normal => slideRight', animate(3000))*/
  ]
})
export class DecorateMakeCarouselComponent implements OnInit {
  @Input() show = false;
  @Input() lengthOfElement: number = 20;
  @Input() numberOfElementsInView: number = 3;
  @Input() unitOfMeasure: string = 'vw';
  maximumLeft: number;
  state = 'normal';
  colors = [{color: 'black'}, {color: 'red'}, {color: 'blue'}, {color: 'grey'}, {color: 'white'}, {color: 'green'}];
  start = 0;
  finish = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.maximumLeft = (this.colors.length - this.numberOfElementsInView) * this.lengthOfElement * -1;
    console.log(this.maximumLeft);
  }

  clickClack() {
    this.show = !this.show;
  }

  moveRight() {
    if (0 > this.finish) {
      this.finish = this.start + this.lengthOfElement;
    }
    this.state = 'slideRight';
  }

  moveLeft() {
    if (this.maximumLeft !== this.start) {
      this.finish = this.start - this.lengthOfElement;
    }
    this.state = 'slideLeft';
  }

  animEnd($event: any) {
    this.state = 'normal';
    this.start = this.finish;
  }
}
