import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[appBackgroundImg]'
})
export class BackgroundImgDirective implements OnInit {
  @HostBinding('style.background') background: SafeStyle;
  @Input() mainBackgroundImage: string;
  @Input() secondaryBackgroundImage: string;

  constructor(private sanitizer: DomSanitizer) {
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
    }
  }

  @HostListener('mouseenter')
  activateHoverImage() {
    if (this.secondaryBackgroundImage) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(
        'url(' + this.secondaryBackgroundImage + ') center center \/ cover no-repeat'
      );
    }
  }

}
