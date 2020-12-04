import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appAnim]'
})
export class AnimDirective implements OnInit {
  @Output() animationEnded = new EventEmitter<boolean>();
  @Input() animationName: string;
  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    const nativeElement = this.elRef.nativeElement;
    nativeElement.addEventListener('animationend', ($event) => {
      if ($event.animationName === this.animationName) {
        this.animationEnded.emit(true);
      }
    });
  }
}
