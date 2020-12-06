import { Component, Input, OnInit } from '@angular/core';
import { ProductListItemForLocal } from '../../../models/productListItemForLocal';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {
  @Input() product: ProductListItemForLocal;
  constructor() { }

  ngOnInit(): void {
  }

}
