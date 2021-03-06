import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ActiveFilterService} from '../../../../services/active-filter.service';
import {Observable} from 'rxjs';
import {AttributeModel} from '../../../../models/attributeModel';

@Component({
  selector: 'app-product-list-dropdown',
  templateUrl: './product-list-dropdown.component.html',
  styleUrls: ['./product-list-dropdown.component.css']
})
export class ProductListDropdownComponent implements OnInit {
  @Input() attributes: Observable<Array<AttributeModel>>;
  @Input() parentElement: ElementRef;
  @Input() marginTopPx: number;
  parentTopOffset: number;
  parentLeftOffset: number;
  dimmerOffset: number;
  dimmerHeight: number;

  constructor(private filterService: ActiveFilterService, private elRef: ElementRef) {
  }

  ngOnInit(): void {
    document.body.append(this.elRef.nativeElement);
    this.calculatePosition();
  }

  calculatePosition() {
    const parentNativeElement = this.parentElement.nativeElement;
    const parentDefaultTopOffset = parentNativeElement.getBoundingClientRect().top;
    const parentHeight = parentNativeElement.getBoundingClientRect().height;
    const documentBody = document.body;
    const topOffsetRelativeToDocument = Math.abs(documentBody.getBoundingClientRect().top);

    this.parentTopOffset = parentDefaultTopOffset + parentHeight + topOffsetRelativeToDocument;
    this.parentLeftOffset = parentNativeElement.getBoundingClientRect().left;

    this.dimmerOffset = parentDefaultTopOffset
      + topOffsetRelativeToDocument + parentHeight;

    this.dimmerHeight = documentBody.scrollHeight - this.dimmerOffset;
  }
}
