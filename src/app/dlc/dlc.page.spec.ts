import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcPage } from './dlc.page';

describe('DlcPage', () => {
  let component: DlcPage;
  let fixture: ComponentFixture<DlcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
