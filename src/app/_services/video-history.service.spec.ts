/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoHistoryService } from './video-history.service';

describe('Service: VideoHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoHistoryService]
    });
  });

  it('should ...', inject([VideoHistoryService], (service: VideoHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
