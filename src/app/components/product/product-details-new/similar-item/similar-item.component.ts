import {Component, Input, OnInit} from '@angular/core';
import {DummyProductModel} from '../../../../models/dummyProductModel';

@Component({
  selector: 'app-similar-item',
  templateUrl: './similar-item.component.html',
  styleUrls: ['./similar-item.component.css']
})
export class SimilarItemComponent implements OnInit {
  @Input() product: DummyProductModel;

  constructor() {
    this.product = new DummyProductModel();
  }

  ngOnInit(): void {

  }

}

