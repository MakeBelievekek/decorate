import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FilterControlModel } from '../../../models/filterControl.model';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.css']
})
export class ActiveFiltersComponent implements OnInit, OnChanges {
  filterControl: FilterControlModel;
  activeFilterExists: boolean;
  @Input() number: number;
  @ViewChild('activeColorFilter') activeColorFilter: ElementRef;

  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.filterControl = this.filterService.filterControl;
    this.setActiveFilterExists();
  }

  ngOnChanges(changes: any) {
    console.log('change');
    this.setActiveFilterExists();
  }

  handleActiveColors(color: string): void {
    this.filterService.handleActiveColors(color);
    this.setActiveFilterExists();
  }

  setActiveFilterExists() {
    if (this.filterControl.activeColors.length < 1) {
      this.activeFilterExists = false;
    } else {
      this.activeFilterExists = true;
    }
  }

  trackFilters() {
    this.setActiveFilterExists();
  }
}
