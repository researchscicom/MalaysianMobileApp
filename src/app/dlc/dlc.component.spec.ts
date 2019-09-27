import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcComponent } from './dlc.component';

describe('DlcComponent', () => {
  let component: DlcComponent;
  let fixture: ComponentFixture<DlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
