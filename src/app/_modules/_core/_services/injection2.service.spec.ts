/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Injection2Service } from './injection/injection2.service';

describe('Service: Injection2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Injection2Service]
    });
  });

  it('should ...', inject([Injection2Service], (service: Injection2Service) => {
    expect(service).toBeTruthy();
  }));
});
