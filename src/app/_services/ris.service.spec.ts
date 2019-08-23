/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RisService } from './ris.service';

describe('Service: Ris', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RisService]
    });
  });

  it('should ...', inject([RisService], (service: RisService) => {
    expect(service).toBeTruthy();
  }));
});
