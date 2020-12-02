import {AfterContentInit, AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements AfterViewInit, AfterContentInit {
  @Input() elementSize: Subject<string>;


  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    const element = this.elementRef.nativeElement;
    this.elementSize.next(element.offsetWidth + 'px');
  }
}
