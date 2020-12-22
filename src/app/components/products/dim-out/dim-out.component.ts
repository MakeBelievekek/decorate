import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-dim-out',
  templateUrl: './dim-out.component.html',
  styleUrls: ['./dim-out.component.css']
})
export class DimOutComponent implements OnInit, OnDestroy {
  @Input() top: number;
  @Input() height: number;
  @Input() marginTopPx: number;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.append(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
