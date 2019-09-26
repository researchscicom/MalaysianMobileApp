import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListPage } from './profile-list.page';

describe('ProfileListPage', () => {
  let component: ProfileListPage;
  let fixture: ComponentFixture<ProfileListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
