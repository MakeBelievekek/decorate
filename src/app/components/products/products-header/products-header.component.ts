import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ScreenControlModel } from '../../../models/screenControl.model';
import { ModalService } from '../../../services/modal.service';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  screenControl: ScreenControlModel;
  items: MenuItem[];
  home: MenuItem;
  constructor(private screenService: ScreenService, private modalService: ModalService) {
  }

  // TODO get the desc from a variable

  // TODO get the nav elements on the top from variable


  ngOnInit(): void {
    this.screenControl = this.screenService.screenControl;
    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.home = {icon: 'pi pi-home'};
  }

}
