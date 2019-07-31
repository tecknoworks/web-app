/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TvShowComponent } from './tv-show.component';

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
