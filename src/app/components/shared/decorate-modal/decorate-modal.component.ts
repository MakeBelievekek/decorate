import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-decorate-modal',
  templateUrl: './decorate-modal.component.html',
  styleUrls: ['./decorate-modal.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('closed', style(
        {
          top: '{{animationStart}}',
          opacity: '{{opacityStartingValue}}'
        }
      ), {params: {animationStart: 0, opacityStartingValue: '0'}}),
      state('open', style(
        {
          top: '{{animationFinish}}',
          opacity: '{{opacityFinishValue}}'
        }
      ), {params: {animationFinish: 0, opacityFinishValue: '100%'}}),
      transition('closed <=> open',
        animate(175)),
      transition('void => open',
        animate(175)),
    ]),
  ]
})
export class DecorateModalComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() height: string;
  @Input() width: string;
  @Input() show = false;
  @Input() topOffSet = '50%';
  @Input() animationStart = '60%';
  @Input() centered = true;
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() fadedBackground: boolean;
  @Input() modalState = 'open';
  @Input() whitShadow: boolean;
  @Output() rightPosition = new EventEmitter<boolean>();

  animationFinished: boolean;
  firstAnimationFinished: boolean;
  isOpen: boolean;
  start = 0;
  hasCustomWidth: boolean;
  hasCustomHeight: boolean;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.setTopOffsetToContent();
    this.checkForCustomDimensions();
  }

  changeState() {
    if (this.animationFinished) {
      this.modalState === 'open' ? this.modalState = 'closed' : this.modalState = 'open';
    }
  }

  setTopOffsetToContent() {
    if (this.centered) {
      this.topOffSet = '50%';
    }
  }

  animEnd($event: any) {
    this.animationFinished = true;
    this.firstAnimationFinished = true;
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalClosed.emit(true);
  }

  checkForCustomDimensions() {
    this.width ? this.hasCustomWidth = true : this.hasCustomWidth = false;
    this.height ? this.hasCustomHeight = true : this.hasCustomHeight = false;
  }

  ngOnDestroy(): void {
    window.onscroll = () => {
    };
  }

  ngAfterViewInit(): void {
    console.log(this.elRef.nativeElement.offsetLeft);
    console.log(this.elRef.nativeElement.offsetTop);
  }

  animStart($event: any) {
    this.animationFinished = false;

  }
}
