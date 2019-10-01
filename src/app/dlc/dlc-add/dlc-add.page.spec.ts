import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcAddPage } from './dlc-add.page';

describe('DlcAddPage', () => {
  let component: DlcAddPage;
  let fixture: ComponentFixture<DlcAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
