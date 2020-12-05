import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {DummyProductModel} from '../../../models/dummyProductModel';

@Component({
  selector: 'app-product-details-new',
  templateUrl: './product-details-new.component.html',
  styleUrls: ['./product-details-new.component.css']
})
export class ProductDetailsNewComponent implements OnInit {
  @Input() productDetailsDimension: ScreenSizeModel;
  @Input() dummyProduct: DummyProductModel;
  @ViewChild('productDetailContainer') productDetailContainer: ElementRef;
  isModalOpen: boolean;
  modalState = 'open';
  similarProducts = [new DummyProductModel(), new DummyProductModel()];

  constructor() {
  }

  ngOnInit(): void {
    this.dummyProduct = new DummyProductModel();
  }

  openModal() {
    this.modalState = 'open';
    this.isModalOpen = true;
    this.disableScroll();
  }

  private disableScroll() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  }
  private enableScroll() {
    window.onscroll = () => {
    };
  }
  startModalClose() {
    this.modalState = 'closed';
    this.enableScroll();
  }



  closeModal() {
    this.isModalOpen = false;
  }

}
