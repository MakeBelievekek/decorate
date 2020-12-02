import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
  insideModal: boolean;
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() animationFinished;

  constructor() {
  }

  @HostListener('mouseleave')
  mouseOutsideOfModalBody() {
    this.insideModal = false;
  }

  @HostListener('mouseenter')
  mouseInsideModalBody() {
    this.insideModal = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.insideModal) {
      this.closeModal.emit(true);
      console.log('body');
    }
  }
}
