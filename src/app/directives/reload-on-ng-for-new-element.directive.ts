import {Directive, EventEmitter, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appReloadOnNgForNewElement]'
})
export class ReloadOnNgForNewElementDirective implements OnInit {
  @Output() newElement = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.newElement.emit();
  }
}
