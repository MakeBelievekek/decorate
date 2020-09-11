import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[appBackgroundImg]'
})
export class BackgroundImgDirective implements OnInit {
  @HostBinding('style.background') background: SafeStyle;
  @Input() image: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.background = this.sanitizer.bypassSecurityTrustStyle(
      'url(' + this.image + ') center center \/ cover no-repeat'
    );
  }

  @HostListener('mouseleave')
  defaultImage() {
    this.background = this.sanitizer.bypassSecurityTrustStyle(
      'url(' + this.image + ') center center \/ cover no-repeat'
    );
  }

  @HostListener('mouseenter')
  activateHoverImage() {
    this.background = this.sanitizer.bypassSecurityTrustStyle(
      'url(' + 'https://i.imgur.com/1nyTupT.jpg' + ') center center \/ cover no-repeat'
    );
  }

}
