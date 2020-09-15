import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  showControl: boolean;
  likeHover: boolean;
  dummyProduct: any = {productName: 'Vaalmmi hosszu és érdeks'};
  showTooltip: boolean;
  placeholder: string;


  constructor() {
  }

  ngOnInit(): void {
  }

  toggleLikeHover(): void {
    this.likeHover = !this.likeHover;
  }

  @HostListener('mouseenter')
  setShowControl(): void {
    this.showControl = true;
  }

  @HostListener('mouseleave')
  setHideControl(): void {
    this.showControl = false;
  }

  toggleTooltip(event): void {
    console.log(event);
    this.placeholder = event;
    this.showTooltip = !this.showTooltip;
  }
}