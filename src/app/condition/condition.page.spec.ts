import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionPage } from './condition.page';

describe('ConditionPage', () => {
  let component: ConditionPage;
  let fixture: ComponentFixture<ConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
