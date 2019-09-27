import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeComponent } from './qrcode.component';

describe('QRCodeComponent', () => {
  let component: QRCodeComponent;
  let fixture: ComponentFixture<QRCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRCodeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
