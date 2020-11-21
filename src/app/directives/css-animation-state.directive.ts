import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCssAnimationState]'
})
export class CssAnimationStateDirective implements OnInit {


  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log('cicák');
    const nativeElement = this.elRef.nativeElement;
    nativeElement.addEventListener('animationend', () => {
        console.log('Animation ended');
      }
    );
  }

}
