import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[appBackgroundImg]'
})
export class BackgroundImgDirective implements OnInit {
  @HostBinding('style.background') background: SafeStyle;

  @HostBinding('class.animate__fadeInTo') get enter() {
    return 'enter' === this.mousePosition;
  }

  @HostBinding('class.animate__fadeInCustom') get leave() {
    return 'leave' === this.mousePosition;
  }

  @Input() mainBackgroundImage: string;
  @Input() secondaryBackgroundImage: string;
  mousePosition: string;

  constructor(private sanitizer: DomSanitizer, private renderer2: Renderer2, private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.background = this.sanitizer.bypassSecurityTrustStyle(
      'url(' + this.mainBackgroundImage + ') center center \/ cover no-repeat'
    );
  }

  @HostListener('mouseleave')
  defaultImage() {
    if (this.secondaryBackgroundImage) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(
        'url(' + this.mainBackgroundImage + ') center center \/ cover no-repeat'
      );
      this.mousePosition = 'leave';
    }
  }

  @HostListener('mouseenter')
  activateHoverImage() {
    if (this.secondaryBackgroundImage) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(
        'url(' + this.secondaryBackgroundImage + ') center center \/ cover no-repeat'
      );
      this.mousePosition = 'enter';
    }

  }

}
