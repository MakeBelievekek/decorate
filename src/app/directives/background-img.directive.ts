import {Directive, HostBinding, Input, OnInit} from '@angular/core';
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

}
