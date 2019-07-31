/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TvShowService } from './tv-show.service';

describe('Service: TvShow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvShowService]
    });
  });

  it('should ...', inject([TvShowService], (service: TvShowService) => {
    expect(service).toBeTruthy();
  }));
});
