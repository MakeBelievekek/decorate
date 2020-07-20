import {Component, HostListener, OnInit} from '@angular/core';
import {ScreenService} from "../../../services/screen.service";
import {ScreenSizeModel} from "../../../models/ScreenSize.model";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  screenSizeModel: ScreenSizeModel;
  navToShow: boolean;

  constructor(private screenService: ScreenService, private modalService: ModalService) {
  }

  //TODO get the desc from a variable

  //TODO get the nav elements on the top from variable


  ngOnInit(): void {
    this.changeContentOnResize();

  }

  @HostListener('window:resize', ['$event'])
  changeContentOnResize() {
    this.screenSizeModel = this.screenService.getScreenSize();
    if (this.screenSizeModel.width >= 1000) {
      this.navToShow = true;
      this.modalService.showModalState.next({control: '', show: false})
    } else {
      this.modalService.showModalState.next({control: '', show: false})
      this.navToShow = false;
    }
  }
}
