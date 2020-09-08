import {Injectable} from '@angular/core';
import {FilterControlModel} from '../models/filterControl.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterControl: FilterControlModel;

  constructor() {
    this.filterControl = {
      order: ['lőség 1', 'lehetőség 2', 'lehetőség 3', 'lehetőség 4', 'lehetőség 5', 'lehetőség 6', 'lehetőség 5', 'lehetőség 6'],
      colors: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin'],
      designers: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin'],
      activeOrder: undefined,
      activeColors: [],
      activeDesigners: []
    };
  }

  handleActiveOrder(order: string): void {
    this.filterControl.activeOrder = order;
  }

  handleActiveColors(color: string): void {
    if (!this.filterControl.activeColors.includes(color)) {
      this.filterControl.activeColors.push(color);
    } else {
      this.filterControl.activeColors = this.filterControl.activeColors.filter(activeColor => activeColor !== color);
    }
  }

  isActiveColorFiltersEmpty(): boolean {
    if (this.filterControl.activeColors.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  handleActiveDesigners(designer: string): void {
    if (!this.filterControl.activeDesigners.includes(designer)) {
      this.filterControl.activeDesigners.push(designer);
    } else {
      this.filterControl.activeDesigners = this.filterControl.activeDesigners.filter(activeDesigner => activeDesigner !== designer);
    }
  }

  clearColorFilters(): void {
    this.filterControl.activeColors.splice(0, this.filterControl.activeColors.length);
  }

  clearDesignerFilters(): void {
    this.filterControl.activeDesigners.splice(0, this.filterControl.activeDesigners.length);

  }
}
