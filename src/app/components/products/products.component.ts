import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScreenService} from '../../services/screen.service';
import {ScreenControlModel} from '../../models/screenControl.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('productContainer') productContainer: ElementRef;
  @ViewChild('productContent') productContent: ElementRef;
  screenControl: ScreenControlModel;

  constructor(private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
  }

  setScreenAttributes() {
    this.screenService.setContent(this.productContainer, this.productContent);
  }
}
