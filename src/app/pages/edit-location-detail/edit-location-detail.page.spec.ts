import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationDetailPage } from './edit-location-detail.page';

describe('EditLocationDetailPage', () => {
  let component: EditLocationDetailPage;
  let fixture: ComponentFixture<EditLocationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocationDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
