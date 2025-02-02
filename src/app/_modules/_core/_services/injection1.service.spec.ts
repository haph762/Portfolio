/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Injection1Service } from './injection1.service';

describe('Service: Injection1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Injection1Service]
    });
  });

  it('should ...', inject([Injection1Service], (service: Injection1Service) => {
    expect(service).toBeTruthy();
  }));
});
