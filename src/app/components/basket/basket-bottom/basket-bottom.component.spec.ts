import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBottomComponent } from './basket-bottom.component';

describe('BasketBottomComponent', () => {
  let component: BasketBottomComponent;
  let fixture: ComponentFixture<BasketBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
