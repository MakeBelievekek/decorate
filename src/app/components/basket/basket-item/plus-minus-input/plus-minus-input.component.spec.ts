import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusInputComponent } from './plus-minus-input.component';

describe('PlusMinusInputComponent', () => {
  let component: PlusMinusInputComponent;
  let fixture: ComponentFixture<PlusMinusInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
