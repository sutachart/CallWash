import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWashPage } from './call-wash.page';

describe('CallWashPage', () => {
  let component: CallWashPage;
  let fixture: ComponentFixture<CallWashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
