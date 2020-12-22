import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {FilterService} from '../../../services/filter.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.css']
})
export class ActiveFiltersComponent implements OnInit, OnDestroy{
  filterControl: FilterControlModel;
  activeFilterExists$: Observable<boolean>;
  activeFilters$: Observable<Array<string>>;
  @Input() number: number;
  @ViewChild('activeColorFilter') activeColorFilter: ElementRef;

  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.activeFilterExists$ = this.filterService.isAnyFilterActive$;
    this.activeFilters$ = this.filterService.activeColorFilters$;
    this.filterService.checkForActiveFiltersOnInit();
  }

  removeActiveFilter(filterToDelete: string) {
    this.filterService.removeActiveColorFilter(filterToDelete);
  }

  ngOnDestroy(): void {
  }
}
