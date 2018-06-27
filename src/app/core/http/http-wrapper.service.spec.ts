/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpWrapperService } from './http-wrapper.service';

describe('Service: HttpWrapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpWrapperService]
    });
  });

  it('should ...', inject([HttpWrapperService], (service: HttpWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
