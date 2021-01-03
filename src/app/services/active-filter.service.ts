import {Injectable} from '@angular/core';
import {FilterControlModel} from '../models/filterControl.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter, map, pluck, shareReplay, tap} from 'rxjs/operators';
import {AttributeModel} from '../models/attributeModel';
import {ProductCategoryModalModel} from '../models/ProductCategoryModalModel';
import {ProductAttributes} from '../models/productAttributes';

@Injectable({
  providedIn: 'root'
})
export class ActiveFilterService {
  private activeCategoriesModal = new BehaviorSubject<ProductCategoryModalModel>(null);
  activeCategoriesModal$: Observable<ProductCategoryModalModel> = this.activeCategoriesModal.asObservable();
  private activeProductAttributes = new Subject<ProductAttributes>();
  activeProductAttributes$: Observable<ProductAttributes> = this.activeProductAttributes.asObservable();

  /*  colors$ = this.activeProductAttributes$.pipe(
      pluck('colorList'),
      map((colors) => colors),
    );*/
  patterns$ = this.activeProductAttributes$.pipe(
    pluck('patternList'),
    map((patternList) => patternList),
  );
  styles$ = this.activeProductAttributes$.pipe(
    pluck('styleList'),
    map((styleList) => styleList),
  );
  compositions$ = this.activeProductAttributes$.pipe(
    pluck('compositionList'),
    map((compositionList) => compositionList),
  );

  private activeFilters = new BehaviorSubject<Array<AttributeModel>>([]);
  activeFilters$: Observable<Array<AttributeModel>> = this.activeFilters.asObservable();
  private isAnyFilterActive = new BehaviorSubject<boolean>(false);
  isAnyFilterActive$ = this.isAnyFilterActive.asObservable();


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

  addActiveProductAttributes(activeProductAttributes: ProductAttributes) {
    this.activeProductAttributes.next(activeProductAttributes);
  }

  resetActiveFilters() {
    this.initiateActiveFilter();
  }

  initiateActiveFilter() {
    this.activeFilters.next([]);
    this.isAnyFilterActive.next(false);
  }

  activateFilter(activeFilter: AttributeModel): void {
    const activeFilters = this.activeFilters.getValue();
    activeFilters.push(activeFilter);

    this.setIsAnyFilterActive(activeFilters);

    this.activeFilters.next(activeFilters);
  }

  deactivateFilter(deactiveFilter: AttributeModel): void {
    const allFilters = this.activeFilters.getValue();
    const activeFilters = allFilters.filter(activeFilter => activeFilter.id !== deactiveFilter.id);
    console.log(activeFilters);

    this.setIsAnyFilterActive(activeFilters);

    this.activeFilters.next(activeFilters);
  }

  private setIsAnyFilterActive(activeFilters: Array<AttributeModel>): void {
    const isAnyFilterActive = activeFilters.length > 0;
    if (isAnyFilterActive) {
      this.isAnyFilterActive.next(isAnyFilterActive);
    }
  }

  private setAttributeToActiveState(activeAttributeId: number): void {
    /*    const activeCategoryModalModel = this.activeCategoriesModal.getValue();
        const {colorList, styleList, patternList} = activeCategoryModalModel;
        const allAttributes = [...colorList, ...styleList, ...patternList];
        const attributeModels = allAttributes.filter(attribute => attribute.id === activeAttributeId);
        attributeModels.map(attribute => {
          attribute.isActive = true;
          const {type} = attribute;
          const isColorAttribute = type === 'COLOR';
          const isStyleAttribute = type === 'STYLE';
          const isPatternAttribute = type === 'PATTERN';
          if (isColorAttribute) {
            activeCategoryModalModel.colorList = [...colorList];
          } else if (isStyleAttribute) {
            activeCategoryModalModel.colorList = [...colorList];
          }
        });*/
  }

  filterControl: FilterControlModel;

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

  /*checkForActiveFiltersOnInit() {
    this.isAnyFilterActive.next(this.hasActiveFilters());
  }*/

  /*removeActiveColorFilter(colorFilterToRemove: string): void {
    let activeColorFilters = [];
    activeColorFilters = this.activeColorFilters.getValue();

    const result = activeColorFilters.filter(activeColorFilter => activeColorFilter !== colorFilterToRemove);

    this.activeColorFilters.next(result);

    this.isAnyFilterActive.next(this.hasActiveFilters());
  }*/

  removeActiveDesignerFilter(designerFilterToRemove: string): void {
    const activeDesignerFilters = this.activeDesignerFilters.getValue();
    const result = activeDesignerFilters.filter(activeDesignerFilter => activeDesignerFilter !== designerFilterToRemove);

    this.activeColorFilters.next(result);

    this.isAnyFilterActive.next(this.hasActiveFilters());
  }
}
