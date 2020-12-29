import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ActiveFilterService} from '../../../services/active-filter.service';
import {Observable} from 'rxjs';
import {AttributeModel} from '../../../models/attributeModel';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.css']
})
export class ActiveFiltersComponent implements OnInit, OnDestroy{
  filterControl: FilterControlModel;
  activeFilterExists$: Observable<boolean>;
  activeFilters$: Observable<Array<AttributeModel>>;
  @Input() number: number;
  @ViewChild('activeColorFilter') activeColorFilter: ElementRef;

  constructor(private filterService: ActiveFilterService) {
  }

  ngOnInit(): void {
    this.activeFilterExists$ = this.filterService.isAnyFilterActive$;
    this.activeFilters$ = this.filterService.activeFilters$;
  }

  ngOnDestroy(): void {
  }

  deactivateFilter(attribute: AttributeModel) {
    this.filterService.deactivateFilter(attribute);
  }
}
