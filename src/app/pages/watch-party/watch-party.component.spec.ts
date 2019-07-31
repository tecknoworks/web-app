/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatchPartyComponent } from './watch-party.component';

describe('WatchPartyComponent', () => {
  let component: WatchPartyComponent;
  let fixture: ComponentFixture<WatchPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
