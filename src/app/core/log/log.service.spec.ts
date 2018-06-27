/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { LogService } from './log.service';

describe('Service: Log', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LogService]
    });
  });

  it(
    'should ...',
    inject([LogService], (service: LogService) => {
      expect(service).toBeTruthy();
    })
  );
});
