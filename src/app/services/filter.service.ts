import {Injectable} from '@angular/core';
import {FilterControlModel} from '../models/filterControl.model';
import {BehaviorSubject} from 'rxjs';
import {filter, map, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterControl: FilterControlModel;
  private isAnyFilterActive = new BehaviorSubject<boolean>(false);
  isAnyFilterActive$ = this.isAnyFilterActive.asObservable();
  private activeColorFilters = new BehaviorSubject<Array<string>>(['fekete', 'fehér']);
  activeColorFilters$ = this.activeColorFilters.asObservable();
  private activeDesignerFilters = new BehaviorSubject<Array<string>>([]);
  activeDesignerFilters$ = this.activeDesignerFilters.asObservable();

  colors$ = new BehaviorSubject<Array<string>>(['fekete', 'fehér', 'szürke', '' +
  'piros', 'narancs', 'túzok', 'jazmin', 'okker', 'lila', 'csoki', 'ezüst', 'arany',
    'jácint', 'viola']).asObservable().pipe(shareReplay());
  order$ = new BehaviorSubject(['Árszerint növekvő', 'Árszerint csökkenő', 'Legnépszerübb elöl', 'A-Z', 'Z-A']).asObservable();
  designers$ = new BehaviorSubject(['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok',
    'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin']).asObservable();

  constructor() {
    this.filterControl = {
      order: ['Árszerint növekvő', 'Árszerint csökkenő', 'Legnépszerübb elöl', 'A-Z', 'Z-A'],
      colors: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'okker', 'lila', 'csoki', 'ezüst', 'arany', 'jácint', 'viola'],
      designers: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin'],
      activeOrder: undefined,
      activeColors: [],
      activeDesigners: []
    };
  }

  handleActiveOrder(order: string): void {
    this.filterControl.activeOrder = order;
  }

  addActiveColorFilters(filters: Array<string>): void {
    this.activeColorFilters.next(filters);
  }

  clearColorFilters(): void {
  }

  clearDesignerFilters(): void {
  }

  private hasActiveFilters(): boolean {
    const numberOfActiveDesignerFilters = this.activeDesignerFilters.getValue().length;
    const numberOfActiveColorFilters = this.activeColorFilters.getValue().length;

    const numberOfActiveFilters = numberOfActiveDesignerFilters + numberOfActiveColorFilters;
    console.log(numberOfActiveFilters);
    return numberOfActiveFilters !== 0;
  }

  checkForActiveFiltersOnInit() {
    this.isAnyFilterActive.next(this.hasActiveFilters());
  }

  removeActiveColorFilter(colorFilterToRemove: string): void {
    let activeColorFilters = [];
    activeColorFilters = this.activeColorFilters.getValue();

    const result = activeColorFilters.filter(activeColorFilter => activeColorFilter !== colorFilterToRemove);

    this.activeColorFilters.next(result);

    this.isAnyFilterActive.next(this.hasActiveFilters());
  }

  removeActiveDesignerFilter(designerFilterToRemove: string): void {
    const activeDesignerFilters = this.activeDesignerFilters.getValue();
    const result = activeDesignerFilters.filter(activeDesignerFilter => activeDesignerFilter !== designerFilterToRemove);

    this.activeColorFilters.next(result);

    this.isAnyFilterActive.next(this.hasActiveFilters());
  }

}
