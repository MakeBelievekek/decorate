import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScreenService} from "../../services/screen.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('productContent') productContent: ElementRef;

  constructor(private screenService: ScreenService) {
  }

  ngOnInit(): void {
  }

  setScreenAttributes() {
    this.screenService.setContent(this.productContent);
  }
}
