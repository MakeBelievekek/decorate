import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FilterControlModel} from '../../../models/filterControl.model';
import {ActiveFilterService} from '../../../services/active-filter.service';
import {Observable, Subject} from 'rxjs';
import {AttributeModel} from '../../../models/attributeModel';
import {map, takeUntil} from 'rxjs/operators';
import {flattenDeep} from 'lodash';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.css']
})
export class ActiveFiltersComponent implements OnInit, OnDestroy {
  filterControl: FilterControlModel;
  activeAttributes$: Observable<Array<AttributeModel>>;
  @Input() number: number;
  @ViewChild('activeColorFilter') activeColorFilter: ElementRef;
  private unsubscribe$ = new Subject<void>();

  constructor(private activeFilterService: ActiveFilterService) {
  }

  ngOnInit(): void {
    this.activeAttributes$ = this.activeFilterService.activeProductAttributes$.pipe(
      takeUntil(this.unsubscribe$),
      map((activeProductAttributes) => Object.values(activeProductAttributes) as Array<Array<AttributeModel>>),
      map(attributeList => flattenDeep(attributeList)),
      map(attributeList => attributeList.filter(attribute => attribute.isActive))
    );

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
