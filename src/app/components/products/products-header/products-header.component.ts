import {Component, HostListener, OnInit} from '@angular/core';
import {ScreenService} from '../../../services/screen.service';
import {ScreenSizeModel} from '../../../models/ScreenSize.model';
import {ModalService} from '../../../services/modal.service';
import {ScreenControlModel} from '../../../models/screenControl.model';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  screenControl: ScreenControlModel;

  constructor(private screenService: ScreenService, private modalService: ModalService) {
  }

  // TODO get the desc from a variable

  // TODO get the nav elements on the top from variable


  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
  }

}
